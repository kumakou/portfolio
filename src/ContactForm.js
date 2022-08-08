import React from "react";
import { useState } from "react";
import { init, send } from "emailjs-com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const userID = process.env.REACT_APP_EMAILJS_USER_ID;
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

    if (userID && serviceID && templateID) {
      // emailJS初期化
      init(userID);

      // emailJS送信データを定義
      const params = {
        from_name: name,
        email: email,
        subject: subject,
        content: content,
      };
      try {
        await send(serviceID, templateID, params, userID);
        setName("");
        setEmail("");
        setSubject("");
        setContent("");
        alert("送信成功");
      } catch (error) {
        // 送信失敗したらalertで表示
        alert("送信失敗");
      }
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div>
        <label htmlFor="nameForm">ご氏名</label>
      </div>
      <input
        type="text"
        id="nameForm"
        className="formInput"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <label htmlFor="mailForm">メールアドレス</label>
      </div>
      <input
        type="email"
        id="mailForm"
        className="formInput"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>
        <label htmlFor="mailTitleForm">件名</label>
      </div>
      <input
        type="text"
        id="mailTitleForm"
        className="formInput"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <div>
        <label htmlFor="mailContentForm">お問い合わせ内容</label>
      </div>
      <input
        type="text"
        id="mailContentForm"
        className="formInput toiawase"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div class="button_wrapper">
        <button className="submit" type="submit">
          送信
        </button>
      </div>
    </form>
  );
}
