<script setup>
import { ref } from "vue";

import NavPill from "./components/NavPill.vue";
import DefaultInfoCard from "@/examples/Cards/DefaultInfoCard.vue";
import TransactionCard from "./components/TransactionCard.vue";

import MaterialAlert from "@/components/MaterialAlert.vue";
import MaterialSnackbar from "@/components/MaterialSnackbar.vue";

import MiniStatisticsCard from "./components/MiniStatisticsCard.vue";
import ProjectCard from "./components/ProjectCard.vue";
import TimelineList from "@/examples/Cards/TimelineList.vue";
import TimelineItem from "@/examples/Cards/TimelineItem.vue";

import logoXD from "@/assets/img/small-logos/logo-xd.svg";
import logoAtlassian from "@/assets/img/small-logos/logo-atlassian.svg";
import logoSlack from "@/assets/img/small-logos/logo-slack.svg";
import logoSpotify from "@/assets/img/small-logos/logo-spotify.svg";
import logoJira from "@/assets/img/small-logos/logo-jira.svg";
import team1 from "@/assets/img/team-1.jpg";
import team2 from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
import team4 from "@/assets/img/team-4.jpg";

// Reactive state
const snackbar = ref(null);

// Methods
const closeSnackbar = () => {
  snackbar.value = null;
};
</script>

<template>
  <div class="container-fluid mt-4">
    <div class="row align-items-center">
      <div class="col-lg-4 col-sm-8">
        <nav-pill />
      </div>
    </div>


    <div class="row mt-4">
      <div class="col-lg-12 position-relative z-index-2">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <mini-statistics-card
              :title="{ text: 'Today\'s Money', value: '$53k' }"
              detail="<span class='text-success text-sm font-weight-bolder'>+55%</span> than last week"
              :icon="{
                name: 'weekend',
                color: 'text-white',
                background: 'dark',
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-statistics-card
              :title="{ text: 'Today\'s Users', value: '2,300' }"
              detail="<span class='text-success text-sm font-weight-bolder'>+3%</span> than last month"
              :icon="{
                name: 'leaderboard',
                color: 'text-white',
                background: 'primary',
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-statistics-card
              :title="{ text: 'New Clients', value: '3,462' }"
              detail="<span class='text-danger text-sm font-weight-bolder'>-2%</span> than yesterday"
              :icon="{
                name: 'person',
                color: 'text-white',
                background: 'success',
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4">
            <mini-statistics-card
              :title="{ text: 'Sales', value: '$103,430' }"
              detail="<span class='text-success text-sm font-weight-bolder'>+5%</span> Just updated"
              :icon="{
                name: 'weekend',
                color: 'text-white',
                background: 'info',
              }"
            />
          </div>
        </div>
      </div>
    </div>


    <div class="row">
      <div class="col-lg-8 col-md-6 mb-md-0 mb-4">
        <project-card
          title="Projects"
          description="<i class='fa fa-check text-info' aria-hidden='true'></i> <span class='font-weight-bold ms-1'>30 done</span> this month"
          :headers="['Companies', 'Members', 'Budget', 'Progress']"
          :projects="[
            {
              logo: logoXD,
              title: 'Material XD Material XD Version',
              members: [team1, team2, team3, team4],
              budget: '$14,000',
              progress: { percentage: 60, color: 'info' },
            },
            {
              logo: logoAtlassian,
              title: 'Add Progress Track',
              members: [team2, team4],
              budget: '$3,000',
              progress: { percentage: 10, color: 'info' },
            },
            {
              logo: logoSlack,
              title: 'Fix Platform Errors',
              members: [team3, team1],
              budget: 'Not set',
              progress: { percentage: 100, color: 'success' },
            },
            {
              logo: logoSpotify,
              title: 'Launch our Mobile App',
              members: [team4, team3, team4, team1],
              budget: '$20,500',
              progress: { percentage: 100, color: 'success' },
            },
            {
              logo: logoJira,
              title: 'Add the New Pricing Page',
              members: [team4],
              budget: '$500',
              progress: { percentage: 25, color: 'info' },
            },
            {
              logo: logoJira,
              title: 'Redesign New Online Shop',
              members: [team1, team4],
              budget: '$2,000',
              progress: { percentage: 40, color: 'info' },
            },
          ]"
        />
      </div>
      <div class="col-lg-4 col-md-6">
        <timeline-list
          class="h-100"
          title="Orders overview"
          description="<i class='fa fa-arrow-up text-success' aria-hidden='true'></i>
        <span class='font-weight-bold'>24%</span> this month"
        >
          <timeline-item
            :icon="{
              component: 'notifications',
              class: 'text-success',
            }"
            title="$2400 Design changes"
            date-time="22 DEC 7:20 PM"
          />
          <TimelineItem
            :icon="{
              component: 'code',
              class: 'text-danger',
            }"
            title="New order #1832412"
            date-time="21 DEC 11 PM"
          />
          <TimelineItem
            :icon="{
              component: 'shopping_cart',
              class: 'text-info',
            }"
            title="Server payments for April"
            date-time="21 DEC 9:34 PM"
          />
          <TimelineItem
            :icon="{
              component: 'credit_card',
              class: 'text-warning',
            }"
            title="New card added for order #4395133"
            date-time="20 DEC 2:20 AM"
          />
          <TimelineItem
            :icon="{
              component: 'vpn_key',
              class: 'text-primary',
            }"
            title="Unlock packages for development"
            date-time="18 DEC 4:54 AM"
            class="pb-1"
          />
        </timeline-list>
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
