# nuber-server
Server for the (N)Uber Clone Course on Nomad Academy. GraphQL, Typescript, NodeJS

## Resolvers

### Public Resolvers:

- [X] Sign In / Sing up with Facebook (페이스북 연결, 로그인/가입)
- [X] Sign In with Email (이메일 로그인) 현재 테스트는 불가, 아래 인증문자 작업완료 후 가능
- [ ] Start Phone Nuber Verification (인증 문자 전송) * 1.34 chapter에서 twillo 가입해서 문자 서비스 이용하는 강의가 나오는데, 신용카드 등록해서 사야함...젠장, 일단 진행해보고 더 진행이 안될경우 구입하도록! 구입후 .env에서 `TWILIO_TOKEN=`으로 등록~ 1.35에서 다시 시작해야함 실제 문자가 와야 넘어갈수 있으니..
- [ ] Compete Phone Nuber Verification (인증 문자 확인)
- [ ] Sign Up with Email (체크 완료시 Email 로그인)

---

### Private Resolvers:

- [ ] Generate JWT (JWT인증)
- [ ] Verify JWWT(가입 확인)
- [ ] Verify Email (Email 확인)
- [ ] Get my Profile (로그인 후 : 나의 프로필 출력)
- [ ] Update my Profile (나의 프로필 수정)
- [ ] Toggle Driving Mode (내가 운전자, 이용자 변경할수 있도록)
- [ ] Report Location / Orientation (나의 폰 방향, 움직일때 좌표 변경할 위치)
- [ ] Add Place (장소 추가)
- [ ] Edit Place (장소 수정)
- [ ] Delete Place (장소 삭제)
- [ ] See Nearby Drivers (근처 모든 운전자 출력)
- [ ] Subscribe To Nearby Derives (근처 및 특정 다른운전자 출력)
- [ ] Requiest a Ride (운전자 요청)
- [ ] Get Nearby Rides Requests (근처 운전자 요청 받아서 가져오기)
- [ ] Subscribe to Nearby Ride Requests (운전자 요청시 근처 운전자 요청 끊기)
- [ ] Subscribe to Ride Status (운전자 요청이 받아들여졌는지 취소됐는지 알림)
- [ ] Get Cat Room Message (합의된 사용자,운전자 챗팅방 생성)
- [ ] Subscribe to Chat Room Message (챗팅방 확인)
- [ ] Send a Chat Message (챗팅 주고 받기)

## Code Challenge

- [ ] Get Ride History
- [ ] See Ride Detail

##

데이터 베이스 싱크를 맞춰야 합니다.

```
database: postgres
host: localhost
port: 5432
username: postgres
password: 
```

실행

`yarn dev`