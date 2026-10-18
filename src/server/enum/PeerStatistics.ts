// Packet loss values need to be divided by this to get the actual packet loss
export const ENET_PACKET_LOSS_SCALE = 65536;

export enum PeerStatistics {
  // PacketLoss will only update once every 10 seconds, use PacketLossEpoch if you want the time
  // since the last time the packet loss was updated.

  // The amount of packet loss the player has, needs to be scaled with ENET_PACKET_LOSS_SCALE
  PacketLoss = 0,
  // The variance in the packet loss
  PacketLossVariance = 1,
  // The time since the last packet update in ms, relative to the peers connection time
  PacketLossEpoch = 2,
  // The mean amount of time it takes for a packet to get to the client (ping)
  RoundTripTime = 3,
  // The variance in the round trip time
  RoundTripTimeVariance = 4,
  // Despite their name, these are only updated once every 5 seconds, you can get the last time
  // this was updated with PacketThrottleEpoch

  // The last recorded round trip time of a packet
  LastRoundTripTime = 5,
  // The last round trip time variance
  LastRoundTripTimeVariance = 6,
  // The time since the last packet throttle update, relative to the peers connection time
  PacketThrottleEpoch = 7,
}
