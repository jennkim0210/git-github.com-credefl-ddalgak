import { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSent();
    }
  };
  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${assets.background2_icon})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="nav">
        <p>휴먼과 딸깍팀!</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>반가워요 </span>
              </p>
              <p>궁금한 내용을 찾아보세요!</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>나만을 위한 추천여행지 알아보기 💡</p>
              </div>
              <div className="card">
                <p>MBTI를 모른다면 저희가 찾아드릴께요✈️</p>
              </div>
              <div className="card">
                <p>이번 여름휴가 가장 HOT한 여행지는? 🌴</p>
              </div>
              <div className="card">
                <p>인생샷을 찍고 싶다면 여기는 어때요? 🥰</p>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="여기에 입력해 주세요!"
              onKeyDown={handleKeyDown}
            />
            <div>
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">휴먼지능정보공학과 "딸깍팀"</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
