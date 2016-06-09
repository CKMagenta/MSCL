NDSummary.OnToolTipsLoaded("CClass:WirelessPacket",{2621:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2621\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessPacket</div></div></div><div class=\"TTSummary\">Represents a MicroStrain wireless packet</div></div>",2623:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">typedef for the bytes that make up a payload in a packet</div></div>",2663:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Possible error codes from response packets.</div></div>",2670:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2670\" class=\"NDPrototype NoParameterForm\">WirelessPacket()</div><div class=\"TTSummary\">The default constructor for a wireless packet</div></div>",2671:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2671\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static void</span> throwEepromResponseError(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ResponseErrorCode&nbsp;</td><td class=\"PName last\">errorCode,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Throws an exception based on a ResponseErrorCode from a read/write eeprom command.&nbsp; Not all error codes will cause an exception.</div></div>",2673:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2673\" class=\"NDPrototype NoParameterForm\">DeliveryStopFlags m_deliveryStopFlags</div><div class=\"TTSummary\">The delivery stop flags of the packet</div></div>",2674:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2674\" class=\"NDPrototype NoParameterForm\">PacketType m_type</div><div class=\"TTSummary\">The packet type of the packet</div></div>",2675:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2675\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> m_nodeAddress</div><div class=\"TTSummary\">The node address in the packet</div></div>",2676:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2676\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_nodeRSSI</div><div class=\"TTSummary\">The node received signal strength indicator (strength of which the node received the command from the base station).&nbsp; This value will be set to -200 if the packet contains a legacy junk lqi byte that should be thrown out.</div></div>",2677:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2677\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> m_baseRSSI</div><div class=\"TTSummary\">The base received signal strength indicator (strength of which the base station received the response from the node).</div></div>",2678:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2678\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency m_frequency</div><div class=\"TTSummary\">The WirelessTypes::Frequency that this packet was collected on.</div></div>",2679:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2679\" class=\"NDPrototype NoParameterForm\">Payload m_payload</div><div class=\"TTSummary\">The payload bytes in the packet</div></div>",2681:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2681\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> isDataPacket() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not the packet is a Data packet.</div></div>",2682:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2682\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> isDiscoveryPacket() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not the packet is a Node Discovery packet.</div></div>",2683:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2683\" class=\"NDPrototype NoParameterForm\">DeliveryStopFlags deliveryStopFlags() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the delivery stop flags for the packet</div></div>",2684:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2684\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> deliveryStopFlags(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DeliveryStopFlags&nbsp;</td><td class=\"PName last\">flags</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the delivery stop flags to the passed in flags</div></div>",2685:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2685\" class=\"NDPrototype NoParameterForm\">PacketType type() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the packet type of the packet</div></div>",2686:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2686\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> type(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">PacketType&nbsp;</td><td class=\"PName last\">packetType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the packet type of the packet</div></div>",2687:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2687\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address of the packet</div></div>",2688:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2688\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">address</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node address of the packet</div></div>",2689:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2689\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> nodeRSSI() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node RSSI of the packet</div></div>",2690:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2690\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeRSSI(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">rssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node RSSI of the packet</div></div>",2691:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2691\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">int16</span> baseRSSI() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the base station RSSI of the packet</div></div>",2692:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2692\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> baseRSSI(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int16</span>&nbsp;</td><td class=\"PName last\">rssi</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the base station RSSI of the packet</div></div>",2693:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2693\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::Frequency that the packet was collected on</div></div>",2694:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2694\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> frequency(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td class=\"PName last\">freq</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the WirelessTypes::Frequency that the packet was collected on</div></div>",2695:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2695\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Payload&amp; payload() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the payload bytes of the packet</div></div>",2696:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2696\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> payload(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Bytes&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">bytes</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the payload bytes of the packet</div></div>"});