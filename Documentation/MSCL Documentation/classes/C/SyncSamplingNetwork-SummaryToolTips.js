NDSummary.OnToolTipsLoaded("CClass:SyncSamplingNetwork",{3695:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3695\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SyncSamplingNetwork</div></div></div><div class=\"TTSummary\">Used to configure and start a Synchronized Sampling network of wireless nodes.</div></div>",3697:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3697\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> SyncSamplingNetwork(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">networkBaseStation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SyncSamplingNetwork object used to configure and start a Synchronized Sampling network.</div></div>",3699:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3699\" class=\"NDPrototype NoParameterForm\">BaseStation m_networkBase</div><div class=\"TTSummary\">The BaseStation that will act as the parent base station for this network, performing all the communication with the Nodes.</div></div>",3700:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3700\" class=\"NDPrototype NoParameterForm\">std::map&lt;<span class=\"SHKeyword\">uint16</span>, std::unique_ptr&lt;SyncNetworkInfo&gt; &gt; m_nodes</div><div class=\"TTSummary\">A map of node addresses to SyncNetworkInfos containing all the nodes that were added to the network.</div></div>",3701:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3701\" class=\"NDPrototype NoParameterForm\">std::vector&lt;NodeAddress&gt; m_allNodes</div><div class=\"TTSummary\">A vector of node addresses for every node in the network.</div></div>",3702:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3702\" class=\"NDPrototype NoParameterForm\">std::vector&lt;NodeAddress&gt; m_eventNodes</div><div class=\"TTSummary\">A vector of node addresses for every node in Event-Driven mode.</div></div>",3703:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3703\" class=\"NDPrototype NoParameterForm\">std::vector&lt;NodeAddress&gt; m_nonEventNodes</div><div class=\"TTSummary\">A vector of node addresses for every node Not in Event-Driven mode.</div></div>",3704:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3704\" class=\"NDPrototype NoParameterForm\">std::vector&lt;<span class=\"SHKeyword\">bool</span>&gt; m_slots</div><div class=\"TTSummary\">A vector of bools representing all of the transmission slots. If a slot is set (true), it it taken. If a slot is unset (false), it is available.</div></div>",3705:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3705\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_lossless</div><div class=\"TTSummary\">Whether the lossless option is enabled or not.</div></div>",3706:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3706\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_highCapacity</div><div class=\"TTSummary\">Whether the high capacity option is enabled or not.</div></div>",3707:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3707\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> m_percentBandwidth</div><div class=\"TTSummary\">The percent of bandwidth for the entire Sync Sampling Network.&nbsp; This includes nodes that could not find TDMA slots, but does not include nodes who failed to communicate.</div></div>",3708:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3708\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_networkOk</div><div class=\"TTSummary\">Whether the Sync Sampling Network is OK (true) or has problems (false).</div></div>",3709:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3709\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_configApplied</div><div class=\"TTSummary\">Whether the calculated network configuration values have been applied to all of the nodes in the network.</div></div>",3710:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3710\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_disabledBeacon</div><div class=\"TTSummary\">Whether the beacon has already been disabled or not by this object.</div></div>",3711:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3711\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_availableSlotCount</div><div class=\"TTSummary\">The number of remaining available slots.</div></div>",3713:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3713\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addNode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">node</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a WirelessNode to the Sync Sampling network. If the Node already exists in the network, it will not be added.&nbsp; The Node\'s parent BaseStation should be the same as the network\'s master BaseStation.&nbsp; The Node should have its sampling configuration set to a Synchronized Sampling mode prior to adding to be successfully added.</div></div>",3714:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3714\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addNode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">node,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNodeConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">pendingConfig</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a WirelessNode to the Sync Sampling network. If the Node already exists in the network, it will not be added.&nbsp; The Node\'s parent BaseStation should be the same as the network\'s master BaseStation.&nbsp; The Node should have its sampling configuration set to a Synchronized Sampling mode prior to adding to be successfully added.</div></div>",3715:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3715\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> removeNode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Removes a WirelessNode from the Sync Sampling network, if it exists in the network.</div></div>",3716:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3716\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> percentBandwidth() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the total percent bandwidth for the Sync Sampling Network.&nbsp; This includes nodes that could not find TDMA slots, but does not include nodes who failed to communicate (status of &lt;status_PoorCommunication&gt;).</div></div>",3717:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3717\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> ok() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the Sync Sampling Network is OK (true), or has problems such as exceeding bandwidth (false).</div></div>",3718:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3718\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> refresh()</div><div class=\"TTSummary\">Refreshes the Sync Sampling Network.&nbsp; This function must be called when any WirelessNode has changed its configuration after being added to the network!</div></div>",3719:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3719\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> lossless() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the lossless option is enabled or not for the entire network (default of enabled).&nbsp; The lossless feature enables buffering and retransmissions in order to provide 100% packet success rate under most operating conditions.&nbsp; This does, however, have a possible increase in latency, especially in poor RF environments.</div></div>",3720:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3720\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> lossless(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables or Disables the lossless option for the entire network. If changed, refresh will be called.&nbsp; The lossless feature enables buffering and retransmissions in order to provide 100% packet success rate under most operating conditions.&nbsp; This can, however, cause a possible increase in latency, especially in poor RF environments.</div></div>",3721:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3721\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> highCapacity() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether the high capacity option is enabled or not for the entire network (default of false).&nbsp; The high capacity feature reduces transmit rates in order to optimize bandwidth and power savings among nodes with slower sample rates.&nbsp; This can, however, increase the transmit interval from 1 second to (1 to 16) seconds.</div></div>",3722:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3722\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> highCapacity(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables or Disables the high capacity option for the entire network. If changed, refresh will be called.&nbsp; The high capacity feature reduces transmit rates in order to optimize bandwidth and power savings among nodes with slower sample rates.&nbsp; This can, however, increase the transmit interval from 1 second to (1 to 16) seconds.</div></div>",3723:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3723\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> applyConfiguration()</div><div class=\"TTSummary\">Applies the Sync Sampling network settings to all of the nodes in the network.&nbsp; This action is required before starting a Sync Sampling network. The network status must be OK before this can be called.&nbsp; Calling this function repeatedly will only affect the node\'s that haven\'t had their configuration applied successfully. This can be useful if some nodes successfully apply, while others fail to communicate.&nbsp; Note: This will clear any &quot;pending&quot; configurations that any nodes have in the network.&nbsp; You must manually apply those configuration templates to the nodes if you want them to actually be applied to the devices.</div></div>",3724:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3724\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> startSampling()</div><div class=\"TTSummary\">Starts the network sampling by sending the start command to each node, and then starting the beacon on the master basestation with the current system time.  applyConfiguration must be called before this function is called.&nbsp; Calling this function repeatedly will only start the node\'s that haven\'t been started already. This can be useful if some nodes successfully start, while others fail to communicate. The beacon will not be started until all nodes have started.</div></div>",3725:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3725\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> startSampling(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Timestamp&nbsp;</td><td class=\"PName last\">startTime</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Starts the network sampling by sending the start command to each node, and then starting the beacon on the master basestation with the given Timestamp.  applyConfiguration must be called before this function is called.&nbsp; Calling this function repeatedly will only start the node\'s that haven\'t been started already. This can be useful if some nodes successfully start, while others fail to communicate. The beacon will not be started until all nodes have started.</div></div>",3726:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3726\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> startSampling_noBeacon()</div><div class=\"TTSummary\">Sends the start command to each node in the network. The beacon is not started. Note: The nodes will not actually start sampling until they hear a beacon.  applyConfiguration must be called before this function is called.&nbsp; Calling this function repeatedly will only start the node\'s that haven\'t been started already. This can be useful if some nodes successfully start, while others fail to communicate.</div></div>",3727:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3727\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SyncNetworkInfo&amp; getNodeNetworkInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets the SyncNetworkInfo object containing network information on the specified WirelessNode within the Sync Sampling network.</div></div>",3728:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3728\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addNodeToNetwork(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">WirelessNode&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">node,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNodeConfig&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName\">pendingConfig&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">nullptr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a WirelessNode to the Sync Sampling network, with or without a given pending WirelessNodeConfig.&nbsp; If the Node already exists in the network, it will not be added.&nbsp; The Node\'s parent BaseStation should be the same as the network\'s master BaseStation.&nbsp; The Node should have its sampling configuration, or the provided pending configuration, set to a Synchronized Sampling mode prior to adding to be successfully added.</div></div>",3729:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3729\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> calculateNetworkValues(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">optimizeBandwidth</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the network values for a single node, such as transmissions per group and group size.&nbsp; This reads values that are stored on the node to use in the calculations.</div></div>",3730:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3730\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> updateNetworkStatus()</div><div class=\"TTSummary\">Updates the status of each Node and calculates the total percent of bandwidth</div></div>",3731:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3731\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> sortByBandwidth(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;NodeAddress&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">container&nbsp;</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sorts the vector of nodes by the percent of bandwidth (and by node address is bandwidth is the same).</div></div>",3732:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3732\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> sortingFunction(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">address1,</td></tr><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">address2</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">The function used as a predicate to sort the networkorder container by bandwidth</div></div>",3733:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3733\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> findSlotsForNodes(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;NodeAddress&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">nodes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Finds TDMA slots for every Node in the given vector of nodes.&nbsp; Note that this clears m_slots before finding new slots for all of the Nodes.</div></div>",3734:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3734\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> getTdmaSlot(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Finds a TDMA slot for a single Node.</div></div>",3735:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3735\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> optimizeBandwidth()</div><div class=\"TTSummary\">Tries to optimize the bandwidth to give lossless nodes more time to transmit.&nbsp; Nodes may be given different slots and the network order rearranged.</div></div>",3736:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3736\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint32</span> findSamplingDelay(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">NodeAddress&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Calculates the sampling delay for a node in the network.</div></div>",3737:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3737\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> sendStartToAllNodes()</div><div class=\"TTSummary\">Sends the start sync sampling command to all nodes in the network.</div></div>",3738:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3738\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> inLegacyMode()</div><div class=\"TTSummary\">Gets whether the network is in legacy mode (has at least 1 sync v1 node) or not.</div></div>"});