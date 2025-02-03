const Welcome = ({ name, isMember }) => {
  return (
    <div>
      {name ? `${isMember}님 다시 오셨군요` : `${isMember}님 가입하시겠어요?`}
    </div>
  );
};

export default Welcome;
