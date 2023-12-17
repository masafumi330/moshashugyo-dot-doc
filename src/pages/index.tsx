import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
        <h1>
          <Image src="/logo.svg" alt="logo" width="100" height="100" />
          <span>Next.js</span>
        </h1>
        <a href="https://nextjs.org/docs">Documentation</a>
      </header>
      <main>
        <div>
          <div>
            <p>さくっと、パス付き資料の作成&共有</p>
            <ol>
              <img src="" alt="" /><li>ストレスなくサクサク書ける</li>
              <img src="" alt="" /><li>ドキュメントはパス付きで共有可能</li>
              <img src="" alt="" /><li>ベータ版の期間は完全無料</li>
            </ol>
            <a href="">登録する</a><img src="" alt="" />
          </div>
          <div>

          </div>
        </div>

        <div>
          <h2>快適さへのこだわり</h2>
          <div>
            <ol>
              <li>
                <img src="" alt="" />
                <p>シンプルな機能</p>
                <p>多機能でない分、わかりやすく・使いやす機能。書くこと、共有することにのみ特化。</p>
              </li>
              <li>
                <img src="" alt="" />
                <p>綺麗なドキュメント</p>
                <p>見やすいドキュメント、見やすい管理画面。シンプルでわかりやすいデザイン。</p>
              </li>
              <li>
                <img src="" alt="" />
                <p>書きやすいエディタ</p>
                <p>ドキュメント作成画面の装飾はショートカットを用意。慣れればサクサク。</p>
              </li>
            </ol>
          </div>
        </div>

        <div>
          <h2>.docの機能</h2>
          <div>
            <img src="" alt="" />
            <p>ドキュメント作成</p>
            <p>装飾はボタンをワンクリック、もしくはショートカットキーで、綺麗に作成可能。</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>webページとして共有可能</p>
            <p>パスワード付き共有/一般公開（URLを知っていれば閲覧可）／非公開の3つを用意。</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>タグでドキュメントを管理</p>
            <p>ドキュメントはタグ付けすることで、分類が可能。もちろん追加削除／複数指定も可能。</p>
          </div>
        </div>
      </main>
      <footer>
        <div>
          <ol>
            <li>トップ</li>
            <li>利用規約</li>
            <li>プライバシーポリシー</li>
            <li>運用会社</li>
          </ol>
        </div>

        <div>
          <p>© 2021 .doc</p>
        </div>
      </footer>
    </>
  )
}
