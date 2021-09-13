const appContainer = document.querySelector(".app");

appContainer.innerHTML = ` <header>
      <div class="container">
        <div class="nav">
          <div class="nav-logo">
            <a href="/"><img alt="logo" src="./img/logo.png" /> </a>
          </div>

          <div class="nav-profile">
            <a href="https://github.com/Ogzhnsfgl" target="_blank">
              <i class="fas fa-user fa-2x"></i
            ></a>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="main-container">
        <div class="sidebar">
          <a href="/form.html">Form</a>
          <a href="/cardList.html">Card List</a>
        </div>
        <div class="content"></div>
      </div>
    </main>`;
