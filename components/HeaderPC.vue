<script lang="ts" setup></script>

<template>
  <header>
    <div id="seiryo-logo">
      <h1>清陵祭2023</h1>
      <h2>横浜国立大学 大学祭</h2>
    </div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">ホーム</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">
            <span>清陵祭に</span>
            <span>ついて</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/events">企画一覧</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/timetable">タイムテーブル</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/pamphlet">パンフレット</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/sponsors">
            <span>ご協賛に</span>
            <span>ついて</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  flex-direction: column;
  width: max(200px, 25vw);
  height: 100lvh;

  span {
    display: inline-block;
    text-align: right;
  }

  > #seiryo-logo {
    text-align: center;
    margin: 0 auto;
    padding: 20px 0;
    width: 100%;
    color: #594e4e;
    box-sizing: border-box;
    border-bottom: 1px solid #3b3b3b;

    > h1 {
      font-size: 35px;
      font-weight: bold;
      margin: 0;
      padding: 0;
    }

    > h2 {
      font-size: 18px;
      font-weight: bold;
      margin: 0;
      padding: 0;
    }
  }

  nav {
    flex-grow: 1;
    margin: 0 auto;
    width: min(100%, 15em);
    padding: 0 10% 0 0;

    > ul {
      margin: 0;
      box-sizing: border-box;
      width: 100%;
      padding: 10% 0 0 0;
      height: min(95%, 450px);
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-end;

      li {
        transition: all 0.5s linear;
        width: 100%;
        text-align: right;
      }

      a {
        font-size: 1.3em;
        text-decoration: none;
        color: #594e4e;
        opacity: 0.5;
      }

      a.router-link-active {
        font-size: 1.6em;
        font-weight: bold;
        opacity: 1;
      }
    }
  }
}
</style>
