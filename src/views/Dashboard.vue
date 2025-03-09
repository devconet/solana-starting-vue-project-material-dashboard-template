<script setup>
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
</script>

<template>
  <div class="col-md-6">
    <div class="card">
      <div class="card-header p-3">
        <h5 class="mb-0">Send SOL to a friend</h5>
      </div>
      <div class="card-body">
        <!-- Address Input -->
        <div class="mb-3">
          <material-input
            v-model="recipientAddress"
            id="address"
            type="text"
            label="Recipient Address"
            name="address"
            size="lg"
            required
          />
        </div>

        <!-- Amount Input -->
        <div class="mb-3">
          <material-input
            v-model.number="amount"
            id="amount"
            type="number"
            label="Amount"
            name="amount"
            size="lg"
            min="0"
            required
          />
        </div>

<!-- Send Button -->
<div class="text-center">
          <material-button
            class="mt-4"
            variant="gradient"
            color="success"
            fullWidth
            size="lg"
            :disabled="!recipientAddress || amount <= 0"
            @click="sendSol"
          >
            Send SOL
          </material-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dashboard-default",
  data() {
    return {
    };
  },
  components: {
  },
};
</script>
