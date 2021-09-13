const appContainer = document.querySelector(".app");

appContainer.innerHTML = `  <header>
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
          <a href="/form.html" class="active">Form</a>
          <a href="/cardList.html">Card List</a>
        </div>
        <div class="content">
          <div class="content-title">
            <h2>FORM AREA</h2>
          </div>
          <div id="formModal" class="formModal">
            <!-- Modal content -->
            <div class="formModal-content">
              <span class="close">&times;</span>
            </div>
          </div>
          <form class="form">
            <input type="text" name="Company" placeholder="Company" />
            <input type="text" name="First Name" placeholder="First Name" />
            <input type="text" name="Last Name" placeholder="Last Name" />
            <input type="email" name="Email" placeholder="Email" />
            <input type="text" name="Title" placeholder="Title" />
            <input type="text" name="Phone" placeholder="Phone" />

            <div class="radio-menu">
              <div class="radio-title">Job Functions:</div>
              <div class="radio-menu-items">
                <div class="radio-menu-item">
                  <input type="radio" name="Job Function" value="deneme1" />
                  <span> Campaign Management </span>
                </div>
                <div class="radio-menu-item">
                  <input type="radio" name="Job Function" value="deneme2" />
                  <span> Campaign Management </span>
                </div>
                <div class="radio-menu-item">
                  <input type="radio" name="Job Function" value="deneme3" />
                  <span> Campaign Management </span>
                </div>
                <div class="radio-menu-item">
                  <input type="radio" name="Job Function" value="deneme4" />
                  <span> Campaign Management </span>
                </div>
                <div class="radio-menu-item">
                  <input type="radio" name="Job Function" value="deneme5" />
                  <span> Campaign Management </span>
                </div>
              </div>
            </div>
            <textarea
              type="text"
              name="Your message:"
              placeholder="Your message...."
            ></textarea>
            <button class="form-button" type="submit">Send</button>
          </form>
        </div>
      </div>
    </main>`;
