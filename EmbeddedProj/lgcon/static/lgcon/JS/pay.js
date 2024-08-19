var IMP = window.IMP;
// var pgValue = element.getAttribute('data-pg');
// IMP.init(pgValue); // 고객사 식별코드
// console.log(PG);

var today = new Date();
var hours = today.getHours(); // 시
var minutes = today.getMinutes(); // 분
var seconds = today.getSeconds(); // 초
var milliseconds = today.getMilliseconds();
var makeMerchantUid = hours + minutes + seconds + milliseconds;

// 예시로 고객 ID와 UID를 설정 (서버에서 제공받아야 함)
var customer_id = 'CUST-' + Date.now(); // 실제 고객 ID로 대체 필요
var customer_uid = 'UID-' + Math.random().toString(36).substr(2, 16); // 실제 고객 UID로 대체 필요

function kakaoPay(element) {
    var pgValue = element.getAttribute('data-pg');
    IMP.init(pgValue); // 고객사 식별코드
    IMP.request_pay({
        pg: 'kakaopay', // PG사 코드표에서 선택
        pay_method: 'card', // 결제 방식
        merchant_uid: "IMP" + makeMerchantUid, // 결제 고유 번호
        name: '상명대학교 카페', // 제품명
        amount: total_list[1], // 가격
        buyer_email: 'Iamport@chai.finance',
        buyer_name: '상명대학교 스마트정보통신공학과',
        buyer_tel: '010-1234-5678',
        buyer_addr: '충청남도 천안시 동남구 상명대길 31',
        buyer_postcode: '123-456',
        customer_uid: customer_uid, // 고객 UID
        customer_id: customer_id  // 고객 ID
    }, function (rsp) { // callback
        if (rsp.success) {
            alert('결제가 성공적으로 완료되었습니다.');
            console.log(rsp);
        } else {
            alert('결제에 실패하였습니다. ' + rsp.error_msg);
            console.log(rsp);
        }
    });
}

function tossPay() {
    var pgValue = element.getAttribute('data-pg');
    IMP.init(pgValue); // 고객사 식별코드
    IMP.request_pay({
        pg: 'tosspay', // PG사 코드표에서 선택
        pay_method: 'tosspay', // 결제 방식
        merchant_uid: "IMP" + makeMerchantUid, // 결제 고유 번호
        name: '상명대학교 카페', // 제품명
        amount: total_list[1], // 가격s
        buyer_email: 'Iamport@chai.finance',
        buyer_name: '상명대학교 스마트정보통신공학과',
        buyer_tel: '010-1234-5678',
        buyer_addr: '충청남도 천안시 동남구 상명대길 31',
        buyer_postcode: '123-456',
        customer_uid: customer_uid, // 고객 UID
        customer_id: customer_id  // 고객 ID
    }, function (rsp) { // callback
        if (rsp.success) {
            alert('결제가 성공적으로 완료되었습니다.');
            console.log(rsp);
        } else {
            alert('결제에 실패하였습니다. ' + rsp.error_msg);
            console.log(rsp);
        }
    });
}

function payco() {
    var pgValue = element.getAttribute('data-pg');
    IMP.init(pgValue); // 고객사 식별코드
    IMP.request_pay({
        pg: 'payco', // PG사 코드표에서 선택
        pay_method: 'payco', // 결제 방식
        merchant_uid: "IMP" + makeMerchantUid, // 결제 고유 번호
        name: '상명대학교 카페', // 제품명
        amount: total_list[1], // 가격s
        buyer_email: 'Iamport@chai.finance',
        buyer_name: '상명대학교 스마트정보통신공학과',
        buyer_tel: '010-1234-5678',
        buyer_addr: '충청남도 천안시 동남구 상명대길 31',
        buyer_postcode: '123-456',
        customer_uid: customer_uid, // 고객 UID
        customer_id: customer_id  // 고객 ID
    }, function (rsp) { // callback
        if (rsp.success) {
            alert('결제가 성공적으로 완료되었습니다.');
            console.log(rsp);
        } else {
            alert('결제에 실패하였습니다. ' + rsp.error_msg);
            console.log(rsp);
        }
    });
}