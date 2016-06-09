NDSummary.OnToolTipsLoaded("File:MicroStrain/Inertial/Packets/InertialPacketCollector.h",{466:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype466\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">InertialPacketCollector</div></div></div><div class=\"TTSummary\">Class that sets/matches expected responses, and stores all the Inertial packets</div></div>",468:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype468\" class=\"NDPrototype NoParameterForm\">InertialPacketCollector()</div><div class=\"TTSummary\">The default constructor for the InertialPacketCollector</div></div>",469:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype469\" class=\"NDPrototype NoParameterForm\">~InertialPacketCollector()</div><div class=\"TTSummary\">The destructor for the InertialPacketCollector</div></div>",471:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a circular buffer of a InertialDataPacket</div></div>",473:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">The maximum number of data packets that can be stored in the circular buffer</div></div>",475:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype475\" class=\"NDPrototype NoParameterForm\">circular_data_buffer m_dataPackets</div><div class=\"TTSummary\">A circular buffer that holds InertialDataPackets</div></div>",476:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype476\" class=\"NDPrototype NoParameterForm\">std::mutex m_packetMutex</div><div class=\"TTSummary\">A mutex used for thread safety when accessing/modifying the m_dataPackets buffer</div></div>",477:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype477\" class=\"NDPrototype NoParameterForm\">std::condition_variable m_emptyBufferCondition</div><div class=\"TTSummary\">Allows the write to buffer thread to tell the reading thread when data is available</div></div>",479:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype479\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> addDataPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">InertialPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Adds a data packet to the data packets circular buffer</div></div>",480:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype480\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> getDataPackets(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;InertialDataPacket&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">packets,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">timeout</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td></td><td class=\"PName\">maxPackets</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets up to the requested amount of data packets that have been collected.</div></div>",481:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype481\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> totalPackets()</div><div class=\"TTSummary\">Gets the total number of data packets that are currently in the buffer.</div></div>"});