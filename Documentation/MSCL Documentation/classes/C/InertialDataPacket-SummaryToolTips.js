NDSummary.OnToolTipsLoaded("CClass:InertialDataPacket",{689:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype689\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">InertialDataPacket</div></div></div><div class=\"TTSummary\">An Inertial Data Packet that contains both valid and invalid data from an Inertial Device.</div></div>",691:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype691\" class=\"NDPrototype NoParameterForm\">InertialDataPacket()</div><div class=\"TTSummary\">Creates a default constructed InertialDataPacket</div></div>",692:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype692\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> InertialDataPacket(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">InertialPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates an InertialDataPacket object</div></div>",694:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype694\" class=\"NDPrototype NoParameterForm\">InertialDataFields m_dataFields</div><div class=\"TTSummary\">The InertialDataFields that are contained within this packet</div></div>",695:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype695\" class=\"NDPrototype NoParameterForm\">InertialDataPoints m_points</div><div class=\"TTSummary\">The InertialDataPoints within this packet</div></div>",696:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype696\" class=\"NDPrototype NoParameterForm\">Timestamp m_timeStamp</div><div class=\"TTSummary\">The Timestamp of when this packet was received</div></div>",698:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype698\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> parseDataFields()</div><div class=\"TTSummary\">Parses the passed in InertialPacket for all the field information and adds a data field to the InertialDataFields container Also parses out all the InertialDataPoints in the fields that were created and adds them to m_points</div></div>",699:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype699\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> parsePointsInField(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">InertialDataField&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">field</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Parses an InertialDataField for InertialDataPoints and puts them into m_points</div></div>",700:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype700\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> InertialDataPoints&amp; data() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets all the InertialDataPoints that are contained within this packet</div></div>",701:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype701\" class=\"NDPrototype NoParameterForm\">Timestamp timestamp() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp representing when the packet was received by MSCL Note: This is not the same as when the user asked for the &quot;nextDataPacket&quot;</div></div>",703:"<div class=\"NDToolTip TType LC\"><div class=\"TTSummary\">Typedef for a vector of InertialDataPacket objects.</div></div>"});