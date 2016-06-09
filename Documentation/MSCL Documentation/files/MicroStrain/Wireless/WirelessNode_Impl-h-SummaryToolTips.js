NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/WirelessNode_Impl.h",{3324:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3324\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessNode_Impl</div></div></div><div class=\"TTSummary\">Contains the implementation logic for a WirelessNode.&nbsp; Most WirelessNode commands call these commands.</div></div>",3326:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3326\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessNode_Impl(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">basestation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a WirelessNode_Impl object.</div></div>",3328:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3328\" class=\"NDPrototype NoParameterForm\">NodeAddress m_address</div><div class=\"TTSummary\">The address of the Node.</div></div>",3329:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3329\" class=\"NDPrototype NoParameterForm\">BaseStation m_baseStation</div><div class=\"TTSummary\">The Node\'s parent BaseStation.</div></div>",3330:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3330\" class=\"NDPrototype NoParameterForm\">NodeEepromSettings m_eepromSettings</div><div class=\"TTSummary\">The eeprom settings to use for the NodeEeprom object.</div></div>",3331:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3331\" class=\"NDPrototype NoParameterForm\">mutable std::unique_ptr&lt;WirelessProtocol&gt; m_protocol</div><div class=\"TTSummary\">The WirelessProtocol containing all of the protocol commands and info for this Node.</div></div>",3332:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3332\" class=\"NDPrototype NoParameterForm\">mutable std::unique_ptr&lt;NodeEeprom&gt; m_eeprom</div><div class=\"TTSummary\">The NodeEeprom that handles reading and writing eeprom values with the Node and eeprom cache.</div></div>",3333:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3333\" class=\"NDPrototype NoParameterForm\">mutable std::unique_ptr&lt;NodeEepromHelper&gt; m_eepromHelper</div><div class=\"TTSummary\">The NodeEepromHelper used for high level reads and writes on the Node.</div></div>",3334:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3334\" class=\"NDPrototype NoParameterForm\">mutable std::unique_ptr&lt;NodeFeatures&gt; m_features</div><div class=\"TTSummary\">The NodeFeatures containing the features for this Node.</div></div>",3336:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3336\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt;WirelessProtocol&gt; determineProtocol() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Determines the WirelessProtocol to use based on the Node\'s firmware version.</div></div>",3337:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3337\" class=\"NDPrototype NoParameterForm\">NodeEeprom&amp; eeprom() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the NodeEeprom for this Node.</div></div>",3338:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3338\" class=\"NDPrototype NoParameterForm\">NodeEepromHelper&amp; eeHelper() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the NodeEepromHelper for this Node.</div></div>",3339:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3339\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> NodeFeatures&amp; features() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the NodeFeatures for this Node.</div></div>",3340:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3340\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessProtocol&amp; protocol() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the WirelessProtocol for this Node.&nbsp; Note: This requires communicating to the Node if creating the protocol for the first time.</div></div>",3341:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3341\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; lastCommunicationTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp for the last time MSCL communicated with the Node.</div></div>",3342:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3342\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setBaseStation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">basestation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node\'s parent Base Station, which will perform all communication with the Node.</div></div>",3343:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3343\" class=\"NDPrototype NoParameterForm\">BaseStation&amp; getBaseStation()</div><div class=\"TTSummary\">Gets a reference to the BaseStation that is assigned to this Node.</div></div>",3344:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3344\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> hasBaseStation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">basestation</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the given BaseStation is the same BaseStation that is assigned to this Node.</div></div>",3345:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3345\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> useGroupRead(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">useGroup</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables or disables the use of group eeprom read when trying to read a single value (enabled by default).</div></div>",3346:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3346\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> readWriteRetries(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">numRetries</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the number of retry attempts for reading and writing with the Node.</div></div>",3347:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3347\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> useEepromCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">useCache</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets whether or not to utilize the eeprom cache when configuring this Node (default of enabled).</div></div>",3348:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3348\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearEepromCache()</div><div class=\"TTSummary\">Clears the eeprom cache for this Node.</div></div>",3349:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3349\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address of the Node.</div></div>",3350:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3350\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::Frequency that the Node is believed to be on.&nbsp; If the frequency is unknown, it will be read from Eeprom.</div></div>",3351:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3351\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> Version firmwareVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the firmware Version of the Node.</div></div>",3352:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3352\" class=\"NDPrototype NoParameterForm\">WirelessModels::NodeModel model() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessModels::NodeModel of the Node.</div></div>",3353:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3353\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serial() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the Node.</div></div>",3354:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3354\" class=\"NDPrototype NoParameterForm\">WirelessTypes::MicroControllerType microcontroller() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::MicroControllerType of the Node.</div></div>",3355:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3355\" class=\"NDPrototype NoParameterForm\">RadioFeatures radioFeatures() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the RadioFeatures of the Node.</div></div>",3356:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3356\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> dataStorageSize() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of bytes available for data storage on the Node.</div></div>",3357:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3357\" class=\"NDPrototype NoParameterForm\">WirelessTypes::RegionCode regionCode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the region code currently set on the Node.</div></div>",3358:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3358\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> verifyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNodeConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">outIssues</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the settings in the given WirelessNodeConfig are ok to be written to the Node.&nbsp; Options that are set will also be validated against each other. If an option that needs to be validated isn\'t currently set, it will be read from the Node.</div></div>",3359:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3359\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> applyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNodeConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Applies a WirelessNodeConfig to the Node.</div></div>",3360:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3360\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getNumDatalogSessions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the number of datalog sessions that are currently stored on the Node.</div></div>",3361:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3361\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DefaultMode getDefaultMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessTypes::DefaultMode that is currently set on the Node.</div></div>",3362:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3362\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getInactivityTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the user inactivity timeout (in seconds) that is currently set on the Node.</div></div>",3363:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3363\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> getCheckRadioInterval() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the check radio interval that is currently set on the Node.</div></div>",3364:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3364\" class=\"NDPrototype NoParameterForm\">WirelessTypes::TransmitPower getTransmitPower() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessTypes::TransmitPower that is currently set on the Node.</div></div>",3365:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3365\" class=\"NDPrototype NoParameterForm\">WirelessTypes::SamplingMode getSamplingMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::SamplingMode that is currently set on the Node.</div></div>",3366:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3366\" class=\"NDPrototype NoParameterForm\">ChannelMask getActiveChannels() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ChannelMask currently set on the Node, representing which channels are enabled and disabled.</div></div>",3367:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3367\" class=\"NDPrototype NoParameterForm\">WirelessTypes::WirelessSampleRate getSampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::WirelessSampleRate currently set on the Node.</div></div>",3368:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3368\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> getNumSweeps() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of sweeps currently set on the Node, which affects the duration of sampling if unlimited duration is disabled, or the duration of each burst if the sampling mode is Sync Sampling Burst.</div></div>",3369:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3369\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> getUnlimitedDuration() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not unlimited sampling duration is enabled on the Node.</div></div>",3370:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3370\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataFormat getDataFormat() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::DataFormat that is currently set on the Node.</div></div>",3371:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3371\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataCollectionMethod getDataCollectionMethod() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::DataCollectionMethod that is currently set on the Node, representing how the data will be collected.&nbsp; Note: this has no affect if the sampling mode is Armed Datalogging, as this mode only operates in &quot;log only&quot;.</div></div>",3372:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3372\" class=\"NDPrototype NoParameterForm\">TimeSpan getTimeBetweenBursts() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the amount of time between each burst currently set on the Node.</div></div>",3373:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3373\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getLostBeaconTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the lost beacon timeout, in minutes, currently set on the Node.</div></div>",3374:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3374\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">double</span> getHardwareGain(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the hardware gain of the specified ChannelMask.</div></div>",3375:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3375\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> getHardwareOffset(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the hardware offset of the specified ChannelMask currently set on the Node.</div></div>",3376:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3376\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::Filter getLowPassFilter(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the Low Pass Filter of the specified ChannelMask currently set on the Node.</div></div>",3377:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3377\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> getGaugeFactor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the gauge factor of the specified ChannelMask currently set on the Node.</div></div>",3378:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3378\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">LinearEquation getLinearEquation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the linear equation of the specified ChannelMask currently set on the Node.</div></div>",3379:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3379\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::CalCoef_Unit getUnit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the unit of the specified ChannelMask currently set on the Node.</div></div>",3380:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3380\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::CalCoef_EquationType getEquationType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the WirelessTypes::CalCoef_EquationType of the specified ChannelMask currently set on the Node.</div></div>",3381:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3381\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::SettlingTime getFilterSettlingTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the filter settling time of the specified ChannelMask.</div></div>",3382:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3382\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::ThermocoupleType getThermocoupleType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the WirelessTypes::ThermocoupleType of the specified ChannelMask currently set on the Node.</div></div>",3383:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3383\" class=\"NDPrototype NoParameterForm\">FatigueOptions getFatigueOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the FatigueOptions currently set on the Node.</div></div>",3384:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3384\" class=\"NDPrototype NoParameterForm\">HistogramOptions getHistogramOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the HistogramOptions currently set on the Node.</div></div>",3385:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3385\" class=\"NDPrototype NoParameterForm\">ActivitySense getActivitySense() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the ActivitySense options currently set on the Node.</div></div>",3386:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3386\" class=\"NDPrototype NoParameterForm\">EventTriggerOptions getEventTriggerOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the EventTriggerOptions currently set on the Node.</div></div>",3387:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3387\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getDiagnosticInterval() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the interval (in seconds) at which the diagnostic info is configured to be sent.</div></div>",3388:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3388\" class=\"NDPrototype NoParameterForm\">WirelessTypes::StorageLimitMode getStorageLimitMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Rates the WirelessTypes::StorageLimitMode that the Node is configured for.&nbsp; This determines what happens when the datalogging storage limit is reached on the Node.</div></div>",3389:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3389\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> quickPing()</div><div class=\"TTSummary\">Performs a Quick Ping (Short Ping) command on the Node.</div></div>",3390:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3390\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> PingResponse ping()</div><div class=\"TTSummary\">Performs a Long Ping command on the Node to check the communication between the Base Station and the Node.</div></div>",3391:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3391\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> sleep()</div><div class=\"TTSummary\">Puts the Node into a low power, sleep mode.&nbsp; This command attempts to ping the node before sending the sleep command, to verify communication.</div></div>",3392:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3392\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> cyclePower()</div><div class=\"TTSummary\">Cycles the power on the Node.&nbsp; Many configuration changes that are applied to the node do not take affect until the power is cycled.</div></div>",3393:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3393\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resetRadio()</div><div class=\"TTSummary\">Resets the radio on the Node.</div></div>",3394:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3394\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> changeFrequency(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td class=\"PName last\">frequency</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Changes the radio frequency of the Node.</div></div>",3395:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3395\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> SetToIdleStatus setToIdle()</div><div class=\"TTSummary\">Attempts to set the Node to the Idle state so that it can be communicated with (stops it sampling, wakes it up if asleep).</div></div>",3396:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3396\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> erase()</div><div class=\"TTSummary\">Erases all logged data on the Node.</div></div>",3397:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3397\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> startNonSyncSampling()</div><div class=\"TTSummary\">Starts the Node in Non-Synchronized Sampling Mode.</div></div>",3398:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3398\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearHistogram()</div><div class=\"TTSummary\">Clears the Histogram on the Node.</div></div>",3399:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3399\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">AutoBalanceResult autoBalance(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td></td><td class=\"PName last\">targetPercent</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Performs an Auto Balance command on a specified channel on the Node.</div></div>",3400:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3400\" class=\"NDPrototype NoParameterForm\">AutoCalResult_shmLink autoCal_shmLink()</div><div class=\"TTSummary\">Performs automatic calibration for the SHM-Link Wireless Node.</div></div>",3401:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3401\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual uint16</span> readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a uint16 from the given eeprom location of the node. This may use a page download or a read eeprom command.&nbsp; If the value stored in the eeprom cache is still valid, this will be returned instead.</div></div>",3402:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3402\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> Value readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EepromLocation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a value from the given EepromLocation of the node. This may use a page download or a read eeprom command.&nbsp; If the value stored in the eeprom cache is still valid, this will be returned instead.</div></div>",3403:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3403\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes a uint16 to the given eeprom location of the node.&nbsp; If successful, the cache will be updated with the changed value as well.</div></div>",3404:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3404\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EepromLocation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Value&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes a value to the given EepromLocation of the node.&nbsp; If successful, the cache will be updated with the changed value as well.</div></div>"});