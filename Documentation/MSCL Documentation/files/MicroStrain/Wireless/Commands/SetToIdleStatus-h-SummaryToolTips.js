NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/SetToIdleStatus.h",{1395:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1395\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SetToIdleStatus</div></div></div><div class=\"TTSummary\">Holds the status information of the Set to Idle command.</div></div>",1397:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The result of the Set To Idle command once the operation has ceased.</div></div>",1403:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1403\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">SetToIdleStatus(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">shared_ptr&lt;SetToIdle::Response&gt;&nbsp;</td><td class=\"PName last\">response</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a SetToIdleStatus object</div></div>",1405:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1405\" class=\"NDPrototype NoParameterForm\">std::shared_ptr&lt;SetToIdle::Response&gt; m_response</div><div class=\"TTSummary\">A shared_ptr to the &lt;SetToIdle::Response&gt; that this status pertains to.</div></div>",1406:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1406\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> m_complete</div><div class=\"TTSummary\">Whether or not the Stop Node command has come to a completion.</div></div>",1408:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1408\" class=\"NDPrototype NoParameterForm\">SetToIdleResult result()</div><div class=\"TTSummary\">Gets the SetToIdleResult representing the result of the Stop Node command (success, fail, canceled, etc.).&nbsp; After complete is true, this should be called to discover how the command completed.</div></div>",1409:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1409\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> complete(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">10</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets whether the Stop Node command has completed or not, waiting for the specified amount of time before returning.</div></div>",1410:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1410\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> cancel()</div><div class=\"TTSummary\">Cancels the Stop Node operation that this SetToIdleResult belongs to.&nbsp; If the Stop Node operation has already been completed/canceled, this will have no effect.&nbsp; Note: This function will block for up to the BaseStation\'s command timeout to verify that the command was canceled.</div></div>"});