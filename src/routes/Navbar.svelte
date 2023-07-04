<script>
  import { page } from "$app/stores";
  import { fade, fly, draw } from "svelte/transition";
  import logo from "$lib/images/kovanenio_logo_black.png";
  let links = [
    { name: "Etusivu", href: "/" },
    { name: "Meistä", href: "/meista" },
    { name: "Palvelut", href: "/meista/#palvelut" },
    { name: "Ilmainen Verkkosivujen Kartoitus", href: "/#tilaa" },
  ];

  let showMenu = false;
  function toggleMenu() {
    showMenu = !showMenu;
  }

  let ariaLabel = "toggle menu";
</script>

<nav>
  <div class="logo">
    <a href="/">
      <img src={logo} alt="Kovanen.io" width="69" height="69" />
    </a>
  </div>
  <button
    class="menu-icon"
    on:click={toggleMenu}
    aria-expanded={showMenu}
    aria-label={ariaLabel}
  >
    <svg
      class:open={showMenu}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      stroke-width="5"
      stroke-linecap="round"
      width="auto"
    >
      <path
        class="top"
        d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
      />
      <path class="middle" d="m 30,50 h 40" />
      <path
        class="bottom"
        d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
      />
    </svg>
  </button>

  <!-- Desktop Navigation -->
  <div class="links desktop-links">
    <ul>
      {#each links as link (link.href)}
        <li id={link.href == "/#tilaa" ? "nav-highlight" : ""}>
          <a
            class={$page.url.pathname === link.href ? "active" : ""}
            href={link.href}
          >
            {link.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>

  <!-- Mobile Navigation -->
  {#if showMenu}
    <div
      class="links"
      class:show={showMenu}
      transition:fly={{ y: 50, duration: 100 }}
    >
      <ul>
        {#each links as link (link.href)}
          <li
            id={link.href == "/#tilaa" ? "nav-highlight" : ""}
            in:fade={{ delay: 50 }}
          >
            <a
              class={$page.url.pathname === link.href ? "active" : ""}
              href={link.href}
              on:click={toggleMenu}
            >
              {link.name}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    background-color: var(--LightColor1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    position: fixed;
    z-index: 3;
    padding: 10px;
    width: calc(100% - 20px);
    margin: 10px;
    border-radius: 24px;
  }

  nav .logo a {
    display: flex;
    align-items: center;
  }

  nav .logo {
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }

  ul li {
    display: flex;
  }

  ul li a {
    color: #000;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.2rem;
    padding: 1rem;
  }

  ul li a:hover {
    color: #000;
    text-decoration: underline;
  }

  ul li a.active {
    color: var(--HighLightColor1);
    text-decoration: underline;
  }

  #nav-highlight {
    background-color: var(--HighLightColor1);
    border-radius: 24px;
  }

  #nav-highlight a {
    color: var(--LightColor1);
  }

  /* Styles for the hamburger menu icon */
  .menu-icon {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
  }

  .menu-icon svg {
    width: 69px;
    height: auto;
  }

  :root {
    --transition-duration: 400ms;
  }

  svg {
    transition: transform var(--transition-duration);
  }

  .top {
    stroke-dasharray: 40 160;
    transition: stroke-dashoffset var(--transition-duration);
  }

  .middle {
    transform-origin: 50%;
    transition: transform var(--transition-duration);
  }

  .bottom {
    stroke-dasharray: 40 85;
    transition: stroke-dashoffset var(--transition-duration);
  }

  .open {
    transform: rotate(45deg);
    color: var(--HighLightColor1);
  }

  .open .top,
  .open .bottom {
    stroke-dashoffset: -64px;
  }

  .open .middle {
    transform: rotate(90deg);
  }

  /* Hide links by default on small screens */
  .links {
    display: none;
  }

  /* Show links when the show class is present */
  .links.show {
    display: block;
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .menu-icon {
      display: block;
    }

    .links {
      position: absolute;
      top: 100px;
      left: 0;
      width: 100%;
      background-color: var(--LightColor1);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      padding: 1rem;
      border-radius: 24px;
      text-align: center;
    }

    .links ul {
      flex-direction: column;
    }
  }

  @media (min-width: 769px) {
    .links {
      display: flex;
    }
  }

  @media (max-height: 600px) {
    nav {
      height: 60px;
      width: calc(100% - 14px);
      margin: 7px;
    }

    nav li a {
      padding: 10px;
    }

    nav .logo a img {
      max-height: 48px;
      width: auto;
    }

    .links {
      top: 69px;
    }
  }

  @media (max-height: 400px) {
    nav {
      height: 54px;
      width: calc(100% - 10px);
      margin: 5px;
    }

    nav li a {
      font-size: 1rem;
      padding: 10px;
    }

    nav .logo a img {
      max-height: 42px;
      width: auto;
    }

    .links {
      top: 64px;
    }
  }
</style>
