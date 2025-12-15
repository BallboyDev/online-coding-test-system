#!/bin/bash
set -e

# MariaDB 서버를 백그라운드에서 시작합니다.
# docker-entrypoint.sh는 데이터베이스 초기화를 처리합니다.
docker-entrypoint.sh mysqld &

# 서버가 연결을 수락할 때까지 기다립니다.
until mysqladmin ping -h"localhost" --silent; do
    echo 'waiting for mysqld to be connectable...'
    sleep 1
done

# 인자로 전달된 SQL 파일을 실행합니다.
mariadb < "$1"
