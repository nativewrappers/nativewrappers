const ENET_PACKET_LOSS_SCALE = 65536;
var PeerStatistics = /* @__PURE__ */ ((PeerStatistics2) => {
  PeerStatistics2[PeerStatistics2["PacketLoss"] = 0] = "PacketLoss";
  PeerStatistics2[PeerStatistics2["PacketLossVariance"] = 1] = "PacketLossVariance";
  PeerStatistics2[PeerStatistics2["PacketLossEpoch"] = 2] = "PacketLossEpoch";
  PeerStatistics2[PeerStatistics2["RoundTripTime"] = 3] = "RoundTripTime";
  PeerStatistics2[PeerStatistics2["RoundTripTimeVariance"] = 4] = "RoundTripTimeVariance";
  PeerStatistics2[PeerStatistics2["LastRoundTripTime"] = 5] = "LastRoundTripTime";
  PeerStatistics2[PeerStatistics2["LastRoundTripTimeVariance"] = 6] = "LastRoundTripTimeVariance";
  PeerStatistics2[PeerStatistics2["PacketThrottleEpoch"] = 7] = "PacketThrottleEpoch";
  return PeerStatistics2;
})(PeerStatistics || {});
export {
  ENET_PACKET_LOSS_SCALE,
  PeerStatistics
};
