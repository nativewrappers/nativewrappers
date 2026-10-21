export declare const ENET_PACKET_LOSS_SCALE = 65536;
export declare enum PeerStatistics {
    PacketLoss = 0,
    PacketLossVariance = 1,
    PacketLossEpoch = 2,
    RoundTripTime = 3,
    RoundTripTimeVariance = 4,
    LastRoundTripTime = 5,
    LastRoundTripTimeVariance = 6,
    PacketThrottleEpoch = 7
}
