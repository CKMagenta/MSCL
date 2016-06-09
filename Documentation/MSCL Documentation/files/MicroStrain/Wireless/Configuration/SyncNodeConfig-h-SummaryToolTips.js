NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/SyncNodeConfig.h",{1750:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1750\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SyncNodeConfig</div></div></div><div class=\"TTSummary\">A helper class for reading and writing values used for Synchronized Sampling configuration</div></div>",1752:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1752\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SyncNodeConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">SyncNetworkInfo&nbsp;</td><td class=\"PNamePrefix\">*</td><td class=\"PName last\">networkInfo</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SyncNodeConfig object</div></div>",1754:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1754\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> SyncNetworkInfo* m_networkInfo</div><div class=\"TTSummary\">The SyncNetworkInfo object containing information on the Node in the Sync Sampling network.</div></div>",1755:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1755\" class=\"NDPrototype NoParameterForm\">NodeEepromHelper m_eepromHelper</div><div class=\"TTSummary\">The NodeEepromHelper to use in reading and writing eeproms.</div></div>",1757:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1757\" class=\"NDPrototype NoParameterForm\">SampleRate sampleRate()</div><div class=\"TTSummary\">Gets the SampleRate of the node.</div></div>",1758:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1758\" class=\"NDPrototype NoParameterForm\">ChannelMask activeChannels()</div><div class=\"TTSummary\">Gets the ChannelMask of the node.</div></div>",1759:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1759\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> activeChannelCount()</div><div class=\"TTSummary\">Gets the number of active channels on the node for use in Sync Sampling formulas.&nbsp; Note: this does not necessarily return the true active channel count, as some channels on some nodes don\'t count towards active channels in Sync Sampling formulas.</div></div>",1760:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1760\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataFormat dataFormat()</div><div class=\"TTSummary\">Gets the WirelessTypes::DataFormat of the node.</div></div>",1761:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1761\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataCollectionMethod collectionMethod()</div><div class=\"TTSummary\">Gets the WirelessTypes::DataCollectionMethod of the node.</div></div>",1762:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1762\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> sweepsPerSession()</div><div class=\"TTSummary\">Gets the number of sweeps per session of the node.</div></div>",1763:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1763\" class=\"NDPrototype NoParameterForm\">WirelessTypes::SamplingMode samplingMode()</div><div class=\"TTSummary\">Gets the WirelessTypes::SamplingMode ofthe node.</div></div>",1764:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1764\" class=\"NDPrototype NoParameterForm\">TimeSpan samplingDelay()</div><div class=\"TTSummary\">Gets the value stored in eeprom for the sampling delay of the node.</div></div>",1765:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1765\" class=\"NDPrototype NoParameterForm\">TimeSpan timeBetweenBursts()</div><div class=\"TTSummary\">Gets the time between bursts of the node.</div></div>",1766:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1766\" class=\"NDPrototype NoParameterForm\">WirelessTypes::NodeRetransmission retransmission()</div><div class=\"TTSummary\">Gets the WirelessTypes::NodeRetransmission of the node.</div></div>",1767:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1767\" class=\"NDPrototype NoParameterForm\">WirelessTypes::SettlingTime filter2()</div><div class=\"TTSummary\">Gets the second filter of the node.</div></div>",1768:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1768\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> txPerGroup(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">txPerGroup</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the transmissions per group to the node.</div></div>",1769:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1769\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> groupSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">groupSize</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the group size to the node.</div></div>",1770:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1770\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> tdmaAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">address</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the TDMA address to the node.</div></div>",1771:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1771\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> retransmission(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">NodeRetransmission&nbsp;</td><td class=\"PName last\">reTx</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the retransmission value to the node.</div></div>",1772:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1772\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> maxRetransPerBurst(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">maxReTxPerBurst</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the maximum retransmissions per burst to the node.</div></div>",1773:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1773\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> applyEepromChanges()</div><div class=\"TTSummary\">Resets the radio/power on the Node to apply eeprom changes that have been made.</div></div>"});