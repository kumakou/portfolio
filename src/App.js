import "./App.css"
import Kuma from "./asset/S__26058758.jpg"
import Github from "./asset/291716_github_logo_social network_social_icon (1) 1.png"
import Twitter from "./asset/104501_twitter_bird_icon (1) 1.png"
import Work from "./Work"
import Image1 from "./asset/image 1.png"
import Image2 from "./asset/image 2.png"
import Image3 from "./asset/image 3.png"
import Image4 from "./asset/image 4.png"
import Image5 from "./asset/blog.png"
import Image6 from "./asset/commingsoon.png"
import ButtonSVG from "./asset/button.svg"
import ContactForm from "./ContactForm"

const works = [
  {
    image: Image1,
    text: "calendar",
    link: "https://calendar-b6572.web.app/",
  },
  {
    image: Image2,
    text: "foodtoorism",
    link: "https://syunnno.netlify.app/",
  },
  { image: Image3, text: "tutorial", link: "#" },
  { image: Image4, text: "portfolio", link: "#" },
  {
    image: Image5,
    text: "blog",
    link: "https://blog-9l7n7ogww-kumakou.vercel.app/",
  },
  { image: Image6, text: "comming soon", link: "#" },
]

function App() {
  return (
    <div className="App">
      <header className="header" id="Home">
        <nav>
          <ul>
            <li>
              <a href="#Home">HOME</a>
            </li>
            <li>
              <a href="#About">ABOUT</a>
            </li>
            <li>
              <a href="#Works">WORKS</a>
            </li>
            <li>
              <a href="#Skill">SKILL</a>
            </li>
            <li>
              <a href="#Contact">CONTACT</a>
            </li>
          </ul>
        </nav>
        <h1>Kohei Kumagai's portfolio</h1>
        <a href="#About" className="allowmark">
          <img alt="butonのリンク" src={ButtonSVG} />
        </a>
      </header>
      <div className="About" id="About">
        <img className="kuma" src={Kuma} alt="koheiの画像" />
        <div className="about-text">
          <h2>About me</h2>
          <p>
            　青森県出身の大学院生。公立はこだて未来大学で情報について学ぶ。学部1年のころから現在までの5年間学内のプロジェクトに参加。主に、Reactを使用してＷebサービスを開発してる。
            最近はサーバーサイドにも興味あり。
            <br />
            　趣味は、サッカー観戦で主に鹿島アントラーズとトッテナムの試合を見てる。歩くのが好きで大学まで徒歩で1時間20分かけて通学している。通学中はradikoで芸人のラジオを聞いてる。
          </p>
          <div className="sns">
            <p>kumakou1999@gmail.com</p>
            <a href="https://github.com/kumakou">
              <img classNmae="about-icon" src={Github} alt="githubの画像" />
            </a>
            <a href="https://twitter.com/kumakou1999">
              <img src={Twitter} classNmae="about-icon" alt="twitterの画像" />
            </a>
          </div>
        </div>
      </div>
      <div className="Work" id="Works">
        <h2>Works</h2>
        <div className="works">
          {works.map((work) => (
            <Work
              class="work"
              image={work.image}
              text={work.text}
              link={work.link}
            />
          ))}
        </div>
      </div>
      <div className="Skill" id="Skill">
        <h2>Skills</h2>
        <table>
          <tr>
            <th>技術</th>
            <th>経験年数</th>
            <th>使用レベル</th>
          </tr>
          <tbody>
            <tr>
              <td>HTML</td>
              <td>4年</td>
              <td>基本的なことは一通りできます</td>
            </tr>
            <tr>
              <td>CSS</td>
              <td>4年</td>
              <td>基本的なことは一通りできます</td>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>4年</td>
              <td>基本的なことは一通りできます</td>
            </tr>
            <tr>
              <td>React</td>
              <td>3年</td>
              <td>基本的なことは一通りできます</td>
            </tr>
            <tr>
              <td>Python</td>
              <td>3年</td>
              <td>形態素解析、スクレイピングに使用しました</td>
            </tr>
            <tr>
              <td>figma</td>
              <td>1年</td>
              <td>簡単なデザインカンプの作成ができます</td>
            </tr>
            <tr>
              <td>git</td>
              <td>3年</td>
              <td>基本的なことは一通りできます</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="Contact" id="Contact">
        <h2>Contact</h2>
        <p>
          このサイトを通して、私のことを少しでも知っていただけたのなら嬉しいです。
          <br />
          もしこのサイトや私について何かコメントがありましたら、下記フォームをご利用ください。
        </p>
        <ContactForm />
      </div>
      <footer>
        <p>© Copyright 2022 Kohei Kumagai</p>
      </footer>
    </div>
  )
}

export default App
