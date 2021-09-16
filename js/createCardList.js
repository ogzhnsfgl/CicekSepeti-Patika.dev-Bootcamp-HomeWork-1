const appContainer = document.querySelector(".app");
appContainer.innerHTML = `  <header>

      <div class="container">
        <div class="nav">
          <div class="nav-logo">
            <a href="/"><img alt="logo" src="./img/logo.png" /> </a>
          </div>

          <div class="nav-search">
            <input type="text" placeholder="Search..." class="search" /><i
              class="fas fa-search fa-lg"
            ></i>
          </div>

       <div class="nav-profile">
            <a href="https://github.com/Ogzhnsfgl" target="_blank">
             <img src="https://avatars.githubusercontent.com/u/85337758?v=4" alt="" /></a>
          </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="main-container">
        <div class="sidebar">
          <a href="/form.html">Form</a>
          <a href="/cardList.html" class="active">Card List</a>
        </div>
        <div class="content">
          <div class="content-title">
            <h2>CONTENT AREA</h2>
          </div>
          <div class="card-list"></div>
        </div>
      </div>
    </main>`;
