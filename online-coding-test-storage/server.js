// express, multer, fs, path 모듈을 불러옵니다.
const express = require('express') // 웹 프레임워크
const multer = require('multer')   // 파일 업로드를 위한 미들웨어
const fs = require('fs')           // 파일 시스템 모듈
const path = require('path')       // 파일 경로 관련 모듈

// Express 애플리케이션을 생성합니다.
const app = express()

// 서버가 실행될 포트를 3100으로 설정합니다.
const port = 3100

// 사용자 정의 파일 필터 함수 (현재는 사용되지 않음)
// 모든 파일 업로드를 허용하려면 콜백에 true를 전달합니다.
const customFileFilter = (req, file, cb) => {
    cb(true)
}

// Multer 설정을 구성합니다.
const upload = multer({
    // 파일 저장 방식을 설정합니다. (디스크 저장소 사용)
    storage: multer.diskStorage({
        // 파일이 저장될 목적지를 설정합니다.
        destination: (req, file, cb) => {
            cb(null, 'exam/') // 'exam/' 디렉토리에 파일을 저장합니다.
        },
        // 저장될 파일의 이름을 설정합니다.
        filename: (req, file, cb) => {
            // 'loginId-타임스탬프.확장자' 형식으로 파일 이름을 지정합니다.
            cb(null, `loginId-${Date.now()}${path.extname(file.originalname)}`)
        },

    }),
    // 위에서 정의한 사용자 정의 파일 필터 (현재 주석 처리됨)
    // fileFilter: customFileFilter,
    // 업로드 파일 크기 제한을 5MB로 설정합니다.
    limits: { fileSize: 5 * 1024 * 1024 }
})

// '/upload' 경로에 대한 POST 요청을 처리하는 라우터를 설정합니다.
// 예시: curl -F "file=@myfile.txt" localhost:3100/upload
app.post('/upload', upload.any(), (req, res) => {

    // 업로드된 파일 정보를 JSON 형식으로 응답합니다.
    res.json({
        id: 'loginId', // 사용자 ID (현재는 하드코딩)
        fileName: req.files[0].filename, // 서버에 저장된 파일 이름
        ext: path.extname(req.files[0].filename).replace('.', ''), // 파일 확장자 ('.' 제거)
    })
})

// 루트 경로 ('/')에 대한 GET 요청을 처리합니다.
app.get('/', (req, res) => {
    res.send('simple express server') // 간단한 문자열을 응답합니다.
})

// 지정된 포트에서 서버를 시작합니다.
app.listen(port, () => {
    // 서버 시작 시 콘솔에 로그를 출력합니다.
    console.log(`Start server http://localhost:${port}`)
})