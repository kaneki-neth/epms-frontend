<template>
  <!-- <div id="app">
    <nav class="navbar navbar-expand navbar-light fixed-top">
        <div class="container">
            <a class="navbar-brand">Employees Performance Monitoring System</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto" v-if="!user">
                    <li class="nav-item">
                        <router-link :to="{ name: 'Login' }" class="nav-link">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Register' }" class="nav-link">Register</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto" v-if="user">
                    <li class="nav-item">
                        <router-link :to="{ name: 'Dashboard' }" class="nav-link">Dashboard</router-link>
                    </li>
                    <li class="nav-item">
                        <a href="javascript:void(0)" @click="logout" class="nav-link">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </div> -->
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"
          ><i class="fas fa-bars"></i
        ></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <router-link :to="{ name: 'Dashboard' }" class="nav-link"
          >Dashboard</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown2"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Help
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
          <a class="dropdown-item" href="#">FAQ</a>
          <a class="dropdown-item" href="#">Support</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Contact</a>
        </div>
      </li>
    </ul>

    <!-- SEARCH FORM -->
    <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input
          class="form-control form-control-navbar"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Messages Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-comments"></i>
          <span class="badge badge-danger navbar-badge">3</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img
                src="../../assets/user_.jpg"
                alt="User Avatar"
                class="img-size-50 mr-3 img-circle"
              />
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Kenneth Lumahang
                  <span class="float-right text-sm text-danger"
                    ><i class="fas fa-star"></i
                  ></span>
                </h3>
                <p class="text-sm">Hi Liza, miss you!</p>
                <p class="text-sm text-muted">
                  <i class="far fa-clock mr-1"></i> 4 Hours Ago
                </p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img
                src="../../assets/user_.jpg"
                alt="User Avatar"
                class="img-size-50 img-circle mr-3"
              />
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Kenneth Lumahang
                  <span class="float-right text-sm text-muted"
                    ><i class="fas fa-star"></i
                  ></span>
                </h3>
                <p class="text-sm">Sige2, amping diha.</p>
                <p class="text-sm text-muted">
                  <i class="far fa-clock mr-1"></i> 4 Hours Ago
                </p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <!-- Message Start -->
            <div class="media">
              <img
                src="../../assets/user_.jpg"
                alt="User Avatar"
                class="img-size-50 img-circle mr-3"
              />
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Kenneth Lumahang
                  <span class="float-right text-sm text-warning"
                    ><i class="fas fa-star"></i
                  ></span>
                </h3>
                <p class="text-sm">Okay, see you soon.</p>
                <p class="text-sm text-muted">
                  <i class="far fa-clock mr-1"></i> 4 Hours Ago
                </p>
              </div>
            </div>
            <!-- Message End -->
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
        </div>
      </li>
      <!-- Notifications Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-bell"></i>
          <span class="badge badge-warning navbar-badge">15</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-header">15 Notifications</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-envelope mr-2"></i> 4 new messages
            <span class="float-right text-muted text-sm">3 mins</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-users mr-2"></i> 8 friend requests
            <span class="float-right text-muted text-sm">12 hours</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-file mr-2"></i> 3 new reports
            <span class="float-right text-muted text-sm">2 days</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer"
            >See All Notifications</a
          >
        </div>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          data-widget="control-sidebar"
          data-slide="true"
          href="#"
          role="button"
          ><i class="fas fa-th-large"></i
        ></a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->
</template>

<script>
import axios from "axios";

export default {
  name: "Navbar",
  props: ["user"],
  methods: {
    async logout() {
      try {
        const response = await axios.post("logout");
        localStorage.removeItem("token");

        // this.$router.push('/login')
        window.location.href = "/login";
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #ffcb42;
}
</style>