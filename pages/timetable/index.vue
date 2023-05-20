<script lang="ts" setup>
useHead({
  title: "清陵祭 - タイムスケジュール",
  meta: [
    {
      name: "description",
      content: "特別な場所で行われる企画の日時はこちらからご確認いただけます。",
    },
  ],
});
const placeId = ref(1);
const changePlace = (id: number) => {
  placeId.value = id;
};
</script>

<template>
  <SectionTitle section-title="タイムスケジュール" class="section-title" />
  <p style="margin: 0 auto; width: fit-content">
    タイムスケジュールを表示する場所を選択してください
  </p>
  <div class="button-wrapper">
    <button
      class="select-button"
      :class="{ selected: placeId == 1 }"
      @click="changePlace(1)"
    >
      野外音楽堂
    </button>
    <button
      class="select-button"
      :class="{ selected: placeId == 2 }"
      @click="changePlace(2)"
    >
      中央図書館1階メディアホール
    </button>
    <button
      class="select-button"
      :class="{ selected: placeId == 3 }"
      @click="changePlace(3)"
    >
      中央図書館前
    </button>
    <button
      class="select-button"
      :class="{ selected: placeId == 4 }"
      @click="changePlace(4)"
    >
      教育6号館と7号館の間
    </button>
    <button
      class="select-button"
      :class="{ selected: placeId == 5 }"
      @click="changePlace(5)"
    >
      経済・経営学部棟の間
    </button>
    <button
      class="select-button"
      :class="{ selected: placeId == 6 }"
      @click="changePlace(6)"
    >
      中央図書館・学生センター前ウッドデッキ
    </button>
    <button
      class="select-button"
      :class="{ selected: placeId == 7 }"
      @click="changePlace(7)"
    >
      多目的グラウンド
    </button>
    <button
      class="select-button"
      :class="{ selected: placeId == 8 }"
      @click="changePlace(8)"
    >
      大学会館4階 ホール
    </button>
    <button
      class="select-button"
      :class="{ selected: placeId == 9 }"
      @click="changePlace(9)"
    >
      キャンパス全域
    </button>
  </div>
  <div class="time-table-wrapper">
    <div v-show="placeId == 1" class="time-table">
      <SectionFrame>野外音楽堂</SectionFrame>
      <h2 class="day-1">1日目(土)</h2>

      <div class="duration-box"></div>
      <div class="time-table-item">
        <span class="item-start-time">13 : 30</span>
        <div class="item-text">
          <h2 class="item-title">
            野音王 <span class="item-subtitle">〜横国1の野音王はだれだ〜</span>
          </h2>
          <p class="item-description">
            横国生の中から選ばれた者による野音を使った勝ち残り対決。勝ち残った者による野音のタイムアタックで野音の王、つまり野音王を決める。盛り上がること間違いなし!
          </p>
          <p class="item-warning">※ 雨天時: 中止</p>
        </div>

        <span class="item-end-time">14 : 40</span>
      </div>

      <div class="duration-box"></div>

      <div class="time-table-item">
        <span class="item-start-time">15 : 30</span>
        <div class="item-text">
          <h2 class="item-title">;序</h2>
          <p class="item-description">
            参加型クイズ企画です。上位3名には豪華景品が!!
            途中参加はできませんので、時間に注意して参加してください。
          </p>
          <p class="item-warning">※ 雨天時: 経営2号館109教室特設ステージ</p>
        </div>

        <span class="item-end-time">17 : 00</span>
      </div>

      <div class="duration-box"></div>

      <div class="time-table-item">
        <span class="item-start-time">18 : 55</span>
        <div class="item-text">
          <h2 class="item-title">ミスミスター トークショー</h2>
          <p class="item-description">
            例年7月から11月に活動しているミスミスター横国ですが、
            今回は彼らにせまるべく、 トークイベントを開催します！
            初出しの活動秘話が聞けちゃうかも...??
          </p>
          <p class="item-warning">※ 雨天時: 経営2号館109教室特設ステージ</p>
        </div>

        <span class="item-end-time">20 : 00</span>
      </div>

      <div class="duration-box"></div>
      <h2 class="day-2">2日目(日)</h2>
      <div class="duration-box"></div>
      <div class="time-table-item">
        <span class="item-start-time">13 : 00</span>
        <div class="item-text">
          <h2 class="item-title">Grand &#9734; Finale</h2>
          <p class="item-description">
            清陵祭を締めくくる最後の企画！ ゲーム性を持たせたコーナ を中心に、
            観客参加型で全員が楽しめる企画です。
          </p>
          <p class="item-warning">※ 雨天時: 経営2号館109教室特設ステージ</p>
        </div>

        <span class="item-end-time">14 : 10</span>
      </div>
      <div class="duration-box"></div>
    </div>
    <div v-show="placeId == 2" class="time-table">
      <SectionFrame>中央図書館1階メディアホール</SectionFrame>
      <h2 class="day-1">1日目(土)</h2>

      <div class="duration-box"></div>
      <div class="time-table-item">
        <span class="item-start-time">13 : 50</span>
        <div class="item-text">
          <h2 class="item-title">
            YNUトークショー!! In 23清陵
            <span class="item-subtitle">〜横国のすべて魅せます〜</span>
          </h2>
          <p class="item-description">
            横国生の日常を知りたいそこのあなた!! 横国の先生方の講義や
            横国生のトークショーへ ぜひお越しください！
          </p>
          <p class="item-warning"></p>
        </div>
      </div>

      <div class="duration-box"></div>
      <h2 class="day-2">2日目(日)</h2>
      <div class="duration-box"></div>
    </div>
    <div v-show="placeId == 3" class="time-table">
      <SectionFrame>中央図書館前</SectionFrame>
      <h2 class="day-1">1日目(土)</h2>

      <div class="duration-box"></div>
      <div class="time-table-item">
        <span class="item-start-time">13 : 00</span>
        <div class="item-text">
          <h2 class="item-title">23清陵祭グランプリ&#9834;</h2>
          <p class="item-description">
            清陵祭の企画の中から選んで投票していただき、
            グランプリを決定します。
            また、投票された方には景品が当たるチャンスも！
            是非、ご参加ください。
          </p>
          <p class="item-warning"></p>
        </div>

        <span class="item-end-time">16 : 20</span>
      </div>
      <div class="duration-box"></div>
      <h2 class="day-2">2日目(日)</h2>
      <div class="duration-box"></div>
      <div class="time-table-item">
        <span class="item-start-time">10 : 00</span>
        <div class="item-text">
          <h2 class="item-title">23清陵祭グランプリ&#9834;</h2>
          <p class="item-description">
            清陵祭の企画の中から選んで投票していただき、
            グランプリを決定します。
            また、投票された方には景品が当たるチャンスも！
            是非、ご参加ください。
          </p>
          <p class="item-warning"></p>
        </div>

        <span class="item-end-time">11 : 20</span>
      </div>
      <div class="duration-box"></div>
    </div>
    <div v-show="placeId == 4" class="time-table">
      <SectionFrame>教育6号館と7号館の間</SectionFrame>
      <h2 class="day-1">1日目(土)</h2>

      <div class="duration-box"></div>
      <div class="time-table-item">
        <span class="item-start-time">15 : 30</span>
        <div class="item-text">
          <h2 class="item-title">BaySound Jazz Orchestra</h2>
          <p class="item-description">
            ジャズ、ファンク、オリジナル曲など多彩な演奏をお届け。
          </p>
          <p class="item-warning">※雨天時: 中止</p>
        </div>

        <span class="item-end-time">16 : 15</span>
      </div>
      <div class="duration-box"></div>
      <div class="time-table-item">
        <span class="item-start-time">17 : 50</span>
        <div class="item-text">
          <h2 class="item-title">R3ude & Zero to heroines</h2>
          <p class="item-description">R3udeとLIZによるダンスパフォーマンス。</p>
          <p class="item-warning">※雨天時: 中止</p>
          <p class="item-warning" style="color: red">
            ※盗撮防止のため、許可証をお持ちの方を除き撮影を禁止とさせていただきます。
          </p>
        </div>

        <span class="item-end-time">20 : 30</span>
      </div>
      <div class="duration-box"></div>
      <h2 class="day-2">2日目(日)</h2>
      <div class="duration-box"></div>
      <div class="time-table-item">
        <span class="item-start-time">10 : 30</span>
        <div class="item-text">
          <h2 class="item-title">BaySound Jazz Orchestra</h2>
          <p class="item-description">
            ジャズ、ファンク、オリジナル曲など多彩な演奏をお届け。
          </p>
          <p class="item-warning">※雨天時: 中止</p>
        </div>

        <span class="item-end-time">11 : 15</span>
      </div>
      <div class="duration-box"></div>
      <div class="time-table-item">
        <span class="item-start-time">12 : 20</span>
        <div class="item-text">
          <h2 class="item-title">R3ude & Zero to heroines</h2>
          <p class="item-description">R3udeとLIZによるダンスパフォーマンス。</p>
          <p class="item-warning">※雨天時: 中止</p>
          <p class="item-warning" style="color: red">
            ※盗撮防止のため、許可証をお持ちの方を除き撮影を禁止とさせていただきます。
          </p>
        </div>

        <span class="item-end-time">15 : 00</span>
      </div>
      <div class="duration-box"></div>
    </div>
    <div v-show="placeId == 5" class="time-table">
      <SectionFrame>経済・経営学部棟の間</SectionFrame>
      <h2 class="day-1">1日目(土)</h2>

      <div class="duration-box"></div>
      <div class="time-table-item">
        <span class="item-start-time">13 : 00</span>
        <div class="item-text">
          <h2 class="item-title">清陵FM</h2>
          <p class="item-description">
            放送研究会によるラジオの生放送。「清陵FM、朝から夜まで生放送中！面白い番組が盛りだくさん」
          </p>
          <p class="item-warning"></p>
        </div>

        <span class="item-end-time">20 : 00</span>
      </div>
      <div class="duration-box"></div>
      <h2 class="day-2">2日目(日)</h2>
      <div class="duration-box"></div>
      <div class="time-table-item">
        <span class="item-start-time">09 : 00</span>
        <div class="item-text">
          <h2 class="item-title">清陵FM</h2>
          <p class="item-description">
            放送研究会によるラジオの生放送。「清陵FM、朝から夜まで生放送中！面白い番組が盛りだくさん」
          </p>
          <p class="item-warning"></p>
        </div>

        <span class="item-end-time">15 : 00</span>
      </div>
      <div class="duration-box"></div>
    </div>
    <div v-show="placeId == 6" class="time-table">
      <SectionFrame>中央図書館・学生センター前のウッドデッキ</SectionFrame>
      <h2 class="day-1">1日目(土)</h2>

      <div class="duration-box"></div>
      <div class="time-table-item">
        <span class="item-start-time">14 : 30</span>
        <div class="item-text">
          <h2 class="item-title">
            ダンス部パフォーマンス
            <span class="item-subtitle">by 横浜国立大学モダンダンス部</span>
          </h2>
          <p class="item-description">モダンダンス部の作品を披露いたします。</p>
          <p class="item-warning">雨天時: 中止</p>
        </div>

        <span class="item-end-time">15 : 00</span>
      </div>
      <div class="duration-box"></div>
      <h2 class="day-2">2日目(日)</h2>
      <div class="duration-box"></div>
      <div class="time-table-item">
        <span class="item-start-time">12 : 00</span>
        <div class="item-text">
          <h2 class="item-title">
            アカペラストリートライブ
            <span class="item-subtitle">by Stairways</span>
          </h2>
          <p class="item-description">アカペラストリートライブを行います！</p>
          <p class="item-warning">雨天時: 教育6号館101教室</p>
        </div>

        <span class="item-end-time">13 : 30</span>
      </div>
      <div class="duration-box"></div>
    </div>
    <div v-show="placeId == 7" class="time-table">
      <SectionFrame>多目的グラウンド</SectionFrame>
      <h2 class="day-1">1日目(土)</h2>

      <div class="duration-box"></div>
      <div class="time-table-item">
        <span class="item-start-time">12 : 30</span>
        <div class="item-text">
          <h2 class="item-title">
            ソフトボール大会
            <span class="item-subtitle">by ペルソナーズ</span>
          </h2>
          <p class="item-description">
            ソフトボール大会を開催します。自由にチームを作って参加しよう！事前予約制です。
          </p>
        </div>

        <span class="item-end-time">15 : 00</span>
      </div>
      <div class="duration-box"></div>
      <h2 class="day-2">2日目(日)</h2>
      <div class="duration-box"></div>
      <div class="time-table-item">
        <span class="item-start-time">09 : 00</span>
        <div class="item-text">
          <h2 class="item-title">
            ソフトボール大会
            <span class="item-subtitle">by ペルソナーズ</span>
          </h2>
          <p class="item-description">
            ソフトボール大会を開催します。自由にチームを作って参加しよう！事前予約制です。
          </p>
          <p class="item-warning"></p>
        </div>

        <span class="item-end-time">15 : 00</span>
      </div>
      <div class="duration-box"></div>
    </div>
    <div v-show="placeId == 8" class="time-table">
      <SectionFrame>大学会館4階ホール</SectionFrame>
      <h2 class="day-1">1日目(土)</h2>

      <div class="duration-box"></div>
      <div class="time-table-item">
        <span class="item-start-time">13 : 30</span>
        <div class="item-text">
          <h2 class="item-title">
            清陵祭コンサート
            <span class="item-subtitle">by 横浜国立大学吹奏楽団</span>
          </h2>
          <p class="item-description">
            吹奏楽曲からポップス曲までさまざまな曲を お届けします♪
          </p>
        </div>

        <span class="item-end-time">14 : 30</span>
      </div>
      <div class="duration-box"></div>
      <h2 class="day-2">2日目(日)</h2>
      <div class="duration-box"></div>
      <div class="time-table-item">
        <span class="item-start-time">13 : 30</span>
        <div class="item-text">
          <h2 class="item-title">
            清陵祭コンサート
            <span class="item-subtitle">by 横浜国立大学吹奏楽団</span>
          </h2>
          <p class="item-description">
            吹奏楽曲からポップス曲までさまざまな曲を お届けします♪
          </p>
          <p class="item-warning"></p>
        </div>

        <span class="item-end-time">14 : 30</span>
      </div>
      <div class="duration-box"></div>
    </div>
    <div v-show="placeId == 9" class="time-table">
      <SectionFrame>キャンパス全域</SectionFrame>
      <h2 class="day-1">1日目(土)</h2>
      <div class="duration-box"></div>
      <div class="time-table-item">
        <span class="item-start-time">19 : 40</span>
        <div class="item-text">
          <h2 class="item-title">燈</h2>
          <p class="item-description">
            コロナ禍で絶えかけた学生の活気は
            空前の灯とも喩えられるほど儚かった。
            今や清陵祭を開催できるほど復活を遂げた。 行く末の“あかるさ”を願い、
            今宵夜空に華を咲かせよう。
          </p>
          <p class="item-warning">※雨天・荒天・強風時: 中止</p>
        </div>

        <span class="item-end-time">19 : 55</span>
      </div>
      <div class="duration-box"></div>
      <h2 class="day-2">2日目(日)</h2>
      <div class="duration-box"></div>
    </div>
  </div>
  <div class="button-wrapper">
    <button
      class="select-button"
      :class="{ selected: placeId == 1 }"
      @click="changePlace(1)"
    >
      野外音楽堂
    </button>
    <button
      class="select-button"
      :class="{ selected: placeId == 2 }"
      @click="changePlace(2)"
    >
      中央図書館1階メディアホール
    </button>
    <button
      class="select-button"
      :class="{ selected: placeId == 3 }"
      @click="changePlace(3)"
    >
      中央図書館前
    </button>
    <button
      class="select-button"
      :class="{ selected: placeId == 4 }"
      @click="changePlace(4)"
    >
      教育6号館と7号館の間
    </button>
    <button
      class="select-button"
      :class="{ selected: placeId == 5 }"
      @click="changePlace(5)"
    >
      経済・経営学部棟の間
    </button>
    <button
      class="select-button"
      :class="{ selected: placeId == 6 }"
      @click="changePlace(6)"
    >
      中央図書館・学生センター前ウッドデッキ
    </button>
    <button
      class="select-button"
      :class="{ selected: placeId == 7 }"
      @click="changePlace(7)"
    >
      多目的グラウンド
    </button>
    <button
      class="select-button"
      :class="{ selected: placeId == 8 }"
      @click="changePlace(8)"
    >
      大学会館4階 ホール
    </button>
    <button
      class="select-button"
      :class="{ selected: placeId == 9 }"
      @click="changePlace(9)"
    >
      キャンパス全域
    </button>
  </div>
  <PrimaryButton button-text="ホームに戻る" link="/" />
</template>

<style scoped lang="scss">
.section-title {
  margin: 0 auto;
}
.button-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: min(40em, 90%);
  margin: 20px auto;
  padding: 16px 0;

  .select-button {
    color: #3b3b3b;
    text-decoration: none;
    background-color: transparent;
    margin: 4px;
    width: fit-content;
    padding: 6px 16px;
    border: 1px solid #3b3b3b;
    border-radius: 16px;
  }
  .selected {
    background-color: #3b3b3b;
    color: #fff;
  }
}

.time-table {
  max-width: min(40em, 90%);
  margin: 0 auto;
  .frame-section {
    margin: 40px 0;
    width: 100%;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
  }
  .day-1,
  .day-2 {
    font-size: 1.5rem;
  }
  .time-table-item {
    margin: 0 0 0 20px;
    padding: 20px;
    border-left: 1px solid #3b3b3b;
    position: relative;

    .item-text {
      margin: 20px 0;
      .item-title {
        font-size: 1.5rem;
        .item-subtitle {
          font-size: 1rem;
        }
      }
      .item-description {
        margin: 0;
        font-size: 0.8rem;
        line-height: 1.2rem;
      }
      .item-warning {
        margin: 0;
        font-size: 0.7rem;
        line-height: 1rem;
      }
    }

    .item-start-time {
      position: absolute;
      top: 0;
      left: 20px;
      font-size: 1.2rem;
    }
    .item-end-time {
      position: absolute;
      bottom: 0;
      left: 20px;
      font-size: 1.2rem;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -10px;
      width: 20px;
      height: 20px;
      background-color: #3b3b3b;
      border-radius: 100%;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: -10px;
      width: 20px;
      height: 20px;
      background-color: #3b3b3b;
      border-radius: 100%;
    }
  }
  .duration-box {
    margin: 0 0 0 19px;
    width: 100%;
    height: 60px;
    border-left: 3px dashed #3b3b3b;
  }
}
</style>
