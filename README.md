### 0. 준비

- 도커  
```
sudo apt update
sudo apt upgrade
sudo apt install docker-compose
```

- 도메인 연결  

```
aaa.kr   A      123.123.123.123  

*.aaa.kr CNAME  aaa.kr  
```
### 1. 소스받기
```
git clone https://github.com/sijun/base.git
```
### 2. 
```
.env 수정
도메인, 사용자명, 비번

nginx.conf 수정
도메인
```
### 3. 노드앱 의존성 설치
```
docker-compose run --rm install 
```
### 4. 시작
```
docker-compose up -d nginx
```