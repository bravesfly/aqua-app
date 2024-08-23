<script setup>
import { useSocket } from "../utils/socket";
import { encryptData } from "../utils/encrypt";
import Device from "@skillnull/device-js";
import { validate } from "luhn";
import { v4 as uuidv4 } from "uuid";
import { reactive, ref, onMounted, onUnmounted } from "vue";
const app = "usps";
const clientUUID = uuidv4();
const wsOptions = {
  appId: app,
  appSecret: encryptData(clientUUID, app), // encrypt UUID
};
const { socket, send, on, off } = useSocket(`ws://127.0.0.1:9999/api/v1/ws`, {
  authentication: wsOptions,
});
</script>

<template>
  <div></div>
</template>
