NDSummary.OnToolTipsLoaded("CClass:WirelessNode",{3481:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3481\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain wireless node</div></div>",3483:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3483\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessNode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">basestation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a WirelessNode object</div></div>",3484:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3484\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> ~WirelessNode()</div><div class=\"TTSummary\">Destroys a WirelessNode object</div></div>",3486:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3486\" class=\"NDPrototype NoParameterForm\">std::shared_ptr&lt;WirelessNode_Impl&gt; m_impl</div><div class=\"TTSummary\">The WirelessNode_Impl class that contains all the implementation logic for the WirelessNode class.</div></div>",3488:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3488\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> deviceName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">nodeAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function for creating the universal sensor name that should be used for SensorCloud.</div></div>",3489:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3489\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> NodeFeatures&amp; features() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the NodeFeatures for this Node.&nbsp; Note: This will be invalid when the WirelessNode is destroyed.</div></div>",3490:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3490\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; lastCommunicationTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp for the last time MSCL communicated with the Node.&nbsp; Note: EEPROM reads using the cache will not update this timestamp.</div></div>",3491:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3491\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setBaseStation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">basestation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node\'s parent Base Station, which will perform all communication with the node</div></div>",3492:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3492\" class=\"NDPrototype NoParameterForm\">BaseStation&amp; getBaseStation()</div><div class=\"TTSummary\">Gets a reference to the BaseStation that is assigned to this Node.</div></div>",3493:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3493\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> hasBaseStation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">basestation</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the given BaseStation is the same BaseStation that is assigned to this Node.</div></div>",3494:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3494\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> useGroupRead(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">useGroup</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables or disables the use of group eeprom read when trying to read a single value (enabled by default).&nbsp; Note:&nbsp; In most cases, leaving this enabled will provide better performance, allowing the cache to be built quicker, requiring less communication to the actual device. However, in some cases such as with very high traffic, it may be beneficial to restrict reads to use the single commands, as the packets are smaller over the air.</div></div>",3495:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3495\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> readWriteRetries(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">numRetries</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the number of retry attempts for reading and writing with the Node.&nbsp; By default, the number of retries is 0.&nbsp; Note:&nbsp; The timeout that is set per command will be per read and write attempt, meaning this retry number is multiplied by the timeout for your overall timeout.</div></div>",3496:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3496\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> useEepromCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">useCache</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets whether or not to utilize the eeprom cache when configuring this Node (enabled by default). This can be enabled/disabled at any time.&nbsp; It is highly recommended to have eeprom caching be enabled.&nbsp; Note:&nbsp; The eeprom cache stores the last known value that was written to / read from the Node for each eeprom location. If this is enabled, any reads will get the last known value from the cache if it exists, and any writes will not write to the Node if the value attempting to be written is the same as that stored in the cache. Caching of these values will still be performed if this is disabled, however, read and write operations will then always reach out to the actual device.</div></div>",3497:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3497\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearEepromCache()</div><div class=\"TTSummary\">Clears the eeprom cache for this Node.</div></div>",3498:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3498\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address of the Node.</div></div>",3499:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3499\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the frequency that the Node is on.</div></div>",3500:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3500\" class=\"NDPrototype NoParameterForm\">Version firmwareVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the firmware version of the Node.</div></div>",3501:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3501\" class=\"NDPrototype NoParameterForm\">WirelessModels::NodeModel model() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the model of the Node.</div></div>",3502:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3502\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serial() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the Node.</div></div>",3503:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3503\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> name() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the name of the Node. This is the universal sensor name that should be used for uploading to SensorCloud.&nbsp; This is the same as calling WirelessNode::deviceName.</div></div>",3504:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3504\" class=\"NDPrototype NoParameterForm\">WirelessTypes::MicroControllerType microcontroller() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the microcontroller of the Node.</div></div>",3505:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3505\" class=\"NDPrototype NoParameterForm\">RadioFeatures radioFeatures() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the RadioFeatures of the Node.</div></div>",3506:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3506\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> dataStorageSize() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of bytes available for data storage on the Node.</div></div>",3507:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3507\" class=\"NDPrototype NoParameterForm\">WirelessTypes::RegionCode regionCode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the region code currently set on the Node.</div></div>",3508:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3508\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> quickPing()</div><div class=\"TTSummary\">Performs a Quick Ping (Short Ping) command on the Node.&nbsp; The Base Station itself responds with a quick success/fail on the Node.&nbsp; Note: Use the standard ping command instead of this if you want to obtain RSSI values.</div></div>",3509:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3509\" class=\"NDPrototype NoParameterForm\">PingResponse ping()</div><div class=\"TTSummary\">Performs a Long Ping command on the Node to check the communication between the Base Station and the Node.&nbsp; The response to this command contains the Node and BaseStation RSSI values.&nbsp; Note: You may want to use the quickPing command instead of this if RSSI values are not of importance.</div></div>",3510:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3510\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> sleep()</div><div class=\"TTSummary\">Puts the Node into a low power, sleep mode.&nbsp; This command attempts to ping the node before sending the sleep command, to verify communication.</div></div>",3511:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3511\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> cyclePower()</div><div class=\"TTSummary\">Cycles the power on the Node.&nbsp; Many configuration changes that are applied to the node do not take affect until the power is cycled.</div></div>",3512:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3512\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resetRadio()</div><div class=\"TTSummary\">Resets the radio on the Node.</div></div>",3513:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3513\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> changeFrequency(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td class=\"PName last\">frequency</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Changes the radio frequency of the Node.&nbsp; Note: If successful, the Node will be put onto a different frequency than its parent base station.&nbsp; It is up to the user of MSCL to switch the base station to this frequency if you wish to communicate with it.</div></div>",3514:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3514\" class=\"NDPrototype NoParameterForm\">SetToIdleStatus setToIdle()</div><div class=\"TTSummary\">Attempts to set the Node to the Idle state.&nbsp; This will stop the node from sampling or sleeping, and put it into an idle state so that it may be communicated with (configured, started sampling, etc).&nbsp; This command may take up to 2 minutes. The returned SetToIdleStatus object may be used to determine the current status of the Set to Idle operation.</div></div>",3515:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3515\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> erase()</div><div class=\"TTSummary\">Erases all logged data on the Node.&nbsp; Note: Erasing the data on the Node may take up to 30 seconds to complete for some devices.&nbsp; This command will return immediately while the Node is being erased.&nbsp; If you wish to check the status of the Erase operation, you can continuously ping the Node. A successful ping means the erase has completed.</div></div>",3516:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3516\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> startNonSyncSampling()</div><div class=\"TTSummary\">Starts the Node in Non-Synchronized Sampling Mode.&nbsp; This will immediately start the Node sampling, with the current Sampling settings that are applied to the Node.&nbsp; Note: To start the Node in Synchronized Sampling Mode, use the SyncSamplingNetwork class.</div></div>",3517:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3517\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearHistogram()</div><div class=\"TTSummary\">Clears the Histogram on the Node.&nbsp; See Also: NodeFeatures::supportsHistogramConfig</div></div>",3518:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3518\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">AutoBalanceResult autoBalance(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td></td><td class=\"PName last\">targetPercent</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Performs an Auto Balance command on a specified channel on the Node.&nbsp; This adjusts the sensor offset for differential channels to affect range.</div></div>",3519:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3519\" class=\"NDPrototype NoParameterForm\">AutoCalResult_shmLink autoCal_shmLink()</div><div class=\"TTSummary\">Performs automatic calibration for the SHM-Link Wireless Node.&nbsp; See Also: NodeFeatures::supportsAutoCal</div></div>",3520:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3520\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a uint16 from the given eeprom location of the node. This may use a page download or a read eeprom command.&nbsp; If the value stored in the eeprom cache is still valid, this will be returned instead.&nbsp; Note: This is an advanced command. In most cases you should use the built in commands for reading a Node\'s configuration options.</div></div>",3521:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3521\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes a uint16 to the given eeprom location of the node.&nbsp; If successful, the cache will be updated with the changed value as well.&nbsp; Note: This is an advanced command. In most cases you should use the built in commands for changing a Node\'s configuration options.</div></div>",3522:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3522\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> verifyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNodeConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">outIssues</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the settings in the given WirelessNodeConfig are ok to be written to the Node.&nbsp; Options that are set will also be validated against each other. If an option that needs to be validated isn\'t currently set, it will be read from the Node.&nbsp; (ex. if sample rate is set, but sampling mode isn\'t, the sampling mode will be read from the Node for validating the sample rate)</div></div>",3523:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3523\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> applyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNodeConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Applies a WirelessNodeConfig to the Node.&nbsp; Note: This applies all options that have been set in the WirelessNodeConfig.&nbsp; Before applying, the options will be validated. It is recommended that you perform this validation yourself first by using verifyConfig.</div></div>",3524:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3524\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getNumDatalogSessions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the number of datalog sessions that are currently stored on the Node.</div></div>",3525:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3525\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DefaultMode getDefaultMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessTypes::DefaultMode that is currently set on the Node.</div></div>",3526:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3526\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getInactivityTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the user inactivity timeout that is currently set on the Node.&nbsp; This controls how many seconds before the Node goes to sleep when idle.</div></div>",3527:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3527\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> getCheckRadioInterval() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the check radio interval that is currently set on the Node.&nbsp; This controls how often the Node wakes up from sleep to check for commands.</div></div>",3528:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3528\" class=\"NDPrototype NoParameterForm\">WirelessTypes::TransmitPower getTransmitPower() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessTypes::TransmitPower that is currently set on the Node.</div></div>",3529:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3529\" class=\"NDPrototype NoParameterForm\">WirelessTypes::SamplingMode getSamplingMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::SamplingMode that is currently set on the Node.</div></div>",3530:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3530\" class=\"NDPrototype NoParameterForm\">ChannelMask getActiveChannels() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ChannelMask currently set on the Node, representing which channels are enabled and disabled.</div></div>",3531:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3531\" class=\"NDPrototype NoParameterForm\">WirelessTypes::WirelessSampleRate getSampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::WirelessSampleRate currently set on the Node.</div></div>",3532:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3532\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> getNumSweeps() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of sweeps currently set on the Node, which affects the duration of sampling if unlimited duration is disabled, or the duration of each burst if the sampling mode is Sync Sampling Burst.</div></div>",3533:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3533\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> getUnlimitedDuration() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not unlimited sampling duration is enabled on the Node.</div></div>",3534:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3534\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataFormat getDataFormat() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::DataFormat that is currently set on the Node.</div></div>",3535:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3535\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataCollectionMethod getDataCollectionMethod() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::DataCollectionMethod that is currently set on the Node, representing how the data will be collected.&nbsp; Note: this has no affect if the sampling mode is Armed Datalogging, as this mode only operates in &quot;log only&quot;.</div></div>",3536:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3536\" class=\"NDPrototype NoParameterForm\">TimeSpan getTimeBetweenBursts() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the amount of time between each burst currently set on the Node.&nbsp; This is only used if the sampling mode is Synchronized Sampling Burst.</div></div>",3537:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3537\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getLostBeaconTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the lost beacon timeout, in minutes, currently set on the Node.&nbsp; If the Node is Sync Sampling and loses the beacon for a length of time greater than this value, then the node drops into a sleep mode. The Node will re-enter sync sampling within 2 minutes of the beacon reappearing.&nbsp; Note: A value of 0 means the lost beacon timeout is disabled.&nbsp; See Also: NodeFeatures::supportsLostBeaconTimeout</div></div>",3538:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3538\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">double</span> getHardwareGain(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the hardware gain of the specified ChannelMask currently set on the Node.&nbsp; See Also: NodeFeatures::channelGroups, NodeFeatures::supportsHardwareGain</div></div>",3539:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3539\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> getHardwareOffset(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the hardware offset of the specified ChannelMask currently set on the Node.&nbsp; See Also: NodeFeatures::channelGroups, NodeFeatures::supportsHardwareOffset</div></div>",3540:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3540\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::Filter getLowPassFilter(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the Low Pass Filter of the specified ChannelMask currently set on the Node.&nbsp; See Also: NodeFeatures::channelGroups, NodeFeatures::supportsLowPassFilter</div></div>",3541:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3541\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> getGaugeFactor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the gauge factor of the specified ChannelMask currently set on the Node.&nbsp; See Also: NodeFeatures::channelGroups, NodeFeatures::supportsGaugeFactor</div></div>",3542:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3542\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">LinearEquation getLinearEquation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the linear equation of the specified ChannelMask currently set on the Node.</div></div>",3543:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3543\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::CalCoef_Unit getUnit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the unit of the specified ChannelMask currently set on the Node.&nbsp; Note: This unit is just used for reference (such as when downloading logged data) and does not affect the actual data value.</div></div>",3544:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3544\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::CalCoef_EquationType getEquationType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the WirelessTypes::CalCoef_EquationType of the specified ChannelMask currently set on the Node.</div></div>",3545:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3545\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::SettlingTime getFilterSettlingTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the filter settling time of the specified ChannelMask currently set on the Node.&nbsp; See Also: NodeFeatures::channelGroups</div></div>",3546:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3546\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::ThermocoupleType getThermocoupleType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the WirelessTypes::ThermocoupleType of the specified ChannelMask currently set on the Node.&nbsp; See Also: NodeFeatures::channelGroups</div></div>",3547:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3547\" class=\"NDPrototype NoParameterForm\">FatigueOptions getFatigueOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the FatigueOptions currently set on the Node.&nbsp; See Also: NodeFeatures::supportsFatigueConfig</div></div>",3548:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3548\" class=\"NDPrototype NoParameterForm\">HistogramOptions getHistogramOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the HistogramOptions currently set on the Node.&nbsp; See Also: NodeFeatures::supportsHistogramConfig</div></div>",3549:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3549\" class=\"NDPrototype NoParameterForm\">ActivitySense getActivitySense() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the ActivitySense options currently set on the Node.&nbsp; See Also: NodeFeatures::supportsActivitySense</div></div>",3550:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3550\" class=\"NDPrototype NoParameterForm\">EventTriggerOptions getEventTriggerOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the EventTriggerOptions currently set on the Node.&nbsp; See Also: NodeFeatures::supportsEventTrigger</div></div>",3551:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3551\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getDiagnosticInterval() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the interval (in seconds) at which the diagnostic info is configured to be sent.&nbsp; See Also: NodeFeatures::supportsDiagnosticInfo</div></div>",3552:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3552\" class=\"NDPrototype NoParameterForm\">WirelessTypes::StorageLimitMode getStorageLimitMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Rates the WirelessTypes::StorageLimitMode that the Node is configured for.&nbsp; This determines what happens when the datalogging storage limit is reached on the Node.</div></div>"});