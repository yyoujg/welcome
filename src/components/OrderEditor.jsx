import React, { useRef, useState } from "react";

const OrderEditor = () => {
  const addressRef = useRef(null);
  const [orderInfo, setOrderInfo] = useState({
    menu: "족발",
    address: "",
    request: "",
  });

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setOrderInfo((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmit = () => {
    if (addressRef.current.value === "") {
      addressRef.current.focus();
      return;
    }

    alert(
      `주문이 완료되었습니다 메뉴:${orderInfo.menu} 주소:${orderInfo.address} 요청사항:${orderInfo.request}`
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h2>배달의민족 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>메뉴 선택</div>
        <select
          name="menu"
          value={orderInfo.menu}
          onChange={onChange}
          style={{ width: 300, padding: 5 }}
        >
          <option value={"족발"}>족발</option>
          <option value={"떡볶이"}>떡볶이</option>
          <option value={"아이스크림"}>아이스크림</option>
          <option value={"샐러드"}>샐러드</option>
        </select>
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 주소</div>
        <input
          ref={addressRef}
          name="address"
          style={{ width: 300, padding: 5 }}
          placeholder="주소) 서울특별시 xx동 .."
          value={orderInfo.address}
          onChange={onChange}
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 요청사항</div>
        <textarea
          name="request"
          style={{ width: 300, padding: 5 }}
          placeholder="배달 요청사항을 써 주세요..."
          value={orderInfo.request}
          onChange={onChange}
        />
      </div>
      <div>
        <button onClick={onSubmit} style={{ width: 300, padding: 5 }}>
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default OrderEditor;
