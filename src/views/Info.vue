<template>
  <div class="container-fluid mt-4">
    <div class="row align-items-center">
      <div class="col-lg-4 col-sm-8">
        <nav-pill />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="row mt-4">
          <div class="col-xl-6">
            <div class="row">
              <div class="col-md-6">
                <default-info-card
                  icon="account_balance"
                  title="Salary"
                  description="Belong Interactive"
                  value="+$2000"
                />
              </div>
              <div class="col-md-6">
                <default-info-card
                  icon="account_balance_wallet"
                  title="Paypal"
                  description="Freelance Payment"
                  value="$455.00"
                />
              </div>
            </div>
          </div>
          <div class="col-md-12 mb-4">
           
      <div class="row mt-4">
        <div class="col-md-4">
        <transaction-card />
        </div>

       <div class="col-md-6">
        <div class="card">
          <div class="card-header p-3">
            <h5 class="mb-0">Alerts</h5>
          </div>
          <div class="card-body p-3 pb-0">
            <material-alert class="font-weight-light" color="primary" dismissible>
              <span class="text-sm"
                >A simple primary alert with
                <a href="javascript:;" class="alert-link text-white"
                  >an example link</a
                >. Give it a click if you like.</span
              >
            </material-alert>
            <material-alert class="font-weight-light" color="secondary" dismissible>
              <span class="text-sm"
                >A simple secondary alert with
                <a href="javascript:;" class="alert-link text-white"
                  >an example link</a
                >. Give it a click if you like.</span
              >
            </material-alert>
            <material-alert class="font-weight-light" color="success" dismissible>
              <span class="text-sm"
                >A simple success alert with
                <a href="javascript:;" class="alert-link text-white"
                  >an example link</a
                >. Give it a click if you like.</span
              >
            </material-alert>
            <material-alert class="font-weight-light" color="danger" dismissible>
              <span class="text-sm"
                >A simple danger alert with
                <a href="javascript:;" class="alert-link text-white"
                  >an example link</a
                >. Give it a click if you like.</span
              >
            </material-alert>
            <material-alert class="font-weight-light" color="warning" dismissible>
              <span class="text-sm"
                >A simple warning alert with
                <a href="javascript:;" class="alert-link text-white"
                  >an example link</a
                >. Give it a click if you like.</span
              >
            </material-alert>
            <material-alert class="font-weight-light" color="info" dismissible>
              <span class="text-sm"
                >A simple info alert with
                <a href="javascript:;" class="alert-link text-white"
                  >an example link</a
                >. Give it a click if you like.</span
              >
            </material-alert>
            <material-alert class="font-weight-light" color="light" dismissible>
              <span class="text-sm"
                >A simple light alert with
                <a href="javascript:;" class="alert-link text-white"
                  >an example link</a
                >. Give it a click if you like.</span
              >
            </material-alert>
            <material-alert color="dark" dismissible>
              <span class="text-sm"
                >A simple dark alert with
                <a href="javascript:;" class="alert-link text-white"
                  >an example link</a
                >. Give it a click if you like.</span
              >
            </material-alert>
          </div>
        </div>
        <div class="card mt-4">
          <div class="card-header p-3">
            <h5 class="mb-0">Notifications</h5>
            <p class="text-sm mb-0">
              Notifications on this page use Toasts from Bootstrap. Read more
              details
              <a
                href="https://getbootstrap.com/docs/5.0/components/toasts/"
                target="
          "
                >here</a
              >.
            </p>
          </div>
          <div class="card-body p-3">
            <div class="row">
              <div class="col-lg-3 col-sm-6 col-12">
                <button
                  class="btn bg-gradient-success w-100 mb-0 toast-btn"
                  type="button"
                  data-target="successToast"
                  @click="snackbar = 'success'"
                >
                  Success
                </button>
              </div>
              <div class="col-lg-3 col-sm-6 col-12 mt-sm-0 mt-2">
                <button
                  class="btn bg-gradient-info w-100 mb-0 toast-btn"
                  type="button"
                  data-target="infoToast"
                  @click="snackbar = 'info'"
                >
                  Info
                </button>
              </div>
              <div class="col-lg-3 col-sm-6 col-12 mt-lg-0 mt-2">
                <button
                  class="btn bg-gradient-warning w-100 mb-0 toast-btn"
                  type="button"
                  data-target="warningToast"
                  @click="snackbar = 'warning'"
                >
                  Warning
                </button>
              </div>
              <div class="col-lg-3 col-sm-6 col-12 mt-lg-0 mt-2">
                <button
                  class="btn bg-gradient-danger w-100 mb-0 toast-btn"
                  type="button"
                  data-target="dangerToast"
                  @click="snackbar = 'danger'"
                >
                  Danger
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
            
          </div>
        </div>
      </div>
    </div>

    <div class="position-fixed bottom-1 end-1 z-index-2">
      <material-snackbar
        v-if="snackbar === 'success'"
        title="Material Dashboard"
        date="11 mins ago"
        description="Hello, world! This is a notification message."
        :icon="{ component: 'done', color: 'white' }"
        color="success"
        :close-handler="closeSnackbar"
      />
      <material-snackbar
        v-if="snackbar === 'info'"
        title="Material Dashboard"
        date="11 mins ago"
        description="Hello, world! This is a notification message."
        :icon="{ component: 'notifications', color: 'white' }"
        color="info"
        :close-handler="closeSnackbar"
      />
      <material-snackbar
        v-if="snackbar === 'warning'"
        title="Material Dashboard"
        date="11 mins ago"
        description="Hello, world! This is a notification message."
        :icon="{ component: 'travel_explore', color: 'white' }"
        color="warning"
        :close-handler="closeSnackbar"
      />
      <material-snackbar
        v-if="snackbar === 'danger'"
        title="Material Dashboard"
        date="11 mins ago"
        description="Hello, world! This is a notification message."
        :icon="{ component: 'campaign', color: 'white' }"
        color="danger"
        :close-handler="closeSnackbar"
      />
    </div>

  </div>
</template>

<script>
import NavPill from "./components/NavPill.vue";
import DefaultInfoCard from "@/examples/Cards/DefaultInfoCard.vue";
import TransactionCard from "./components/TransactionCard.vue";

import MaterialAlert from "@/components/MaterialAlert.vue";
import MaterialSnackbar from "@/components/MaterialSnackbar.vue";

export default {
  name: "Info",
  components: {
    NavPill,
    DefaultInfoCard,
    TransactionCard,
    MaterialAlert,
    MaterialSnackbar,
  },
  data() {
    return {
      snackbar: null,
    };
  },
  methods: {
    closeSnackbar() {
      this.snackbar = null;
    },
  },
};
</script>
