#Include <SendMessage.au3>
#include <ButtonConstants.au3>
#include <ComboConstants.au3>
#include <EditConstants.au3>
#include <GUIConstantsEx.au3>
#include <GuiComboBoxEx.au3>
#include <ListViewConstants.au3>
#include <TabConstants.au3>
#include <WindowsConstants.au3>
#include <array.au3>
#Include <GuiListView.au3>
#include <File.au3>
#include <WinApi.au3>
#Include <GuiEdit.au3>
#include <GuiMenu.au3>
#include <GuiButton.au3>
#include <StaticConstants.au3>
#NoTrayIcon
#RequireAdmin

Global Enum $idStartAll = 1000, $idStopAll, $idSaveAll, $idExit, $idStartHidden, $idHideAll, $idShowAll, $idProfile
Global Enum $Profile = 0, $Account, $Password, $Character, $GameName, $GamePass, $D2Path, $Realm, $Mode, $Difficulty, $Parameters, $RunsPerKey, $Entry, $Cdkey, $CdkeyIndex, $D2PID, $D2hWnd, $Runs, $Chickens, $Restarts

Global $SUBWIN_Profile
Global $SUBWIN_Name
Global $SUBWIN_Username
Global $SUBWIN_Password
Global $SUBWIN_Character
Global $SUBWIN_GameName
Global $SUBWIN_GamePass
Global $SUBWIN_D2Path
Global $SUBWIN_Realm
Global $SUBWIN_Mode
Global $SUBWIN_Difficulty
Global $SUBWIN_Cmdline
Global $SUBWIN_Cdkey
Global $SUBWIN_Runsperkey
Global $SUBWIN_Entry
Global $SUBWIN_Updateprofile

Global $WIN_Main
Global $WIN_Menu_File
Global $WIN_Menu_Options 
Global $WIN_Menu_Main 
Global $WIN_Profile 
Global $WIN_Start
Global $WIN_Stop
Global $WIN_Add
Global $WIN_Remove
Global $WIN_Edit 
Global $WIN_Hide
Global $WIN_Show 
Global $WIN_Log 
Global $WIN_Log_Console
Global $WIN_Log_Pickup 
Global $WIN_ConsoleArray 
Global $WIN_Menu_Toggle

Global $ProfileIni[50]
Global $ProfileArray[50][50]
Global $CDKeyHandle[50][50]
Global $CDKeyCounter[50]

Opt("WinWaitDelay", 0)
Opt("GUIOnEventMode", 1)
Opt("WinTitleMatchMode", 3)
Opt('MustDeclareVars', 1)

GUIRegisterMsg($WM_COPYDATA, "RecieveCopyData")
GUIRegisterMsg($WM_COMMAND, "MenuHandle")

LoadProfileArray()
LoadKeyHandler()
InitializeGUI()

While 1
	CheckInstances()
	sleep(1)
WEnd

Func LoadProfileArray() 
	$ProfileIni[0] = 0
	For $i =0 to UBound($ProfileArray)-1
		$CDKeyCounter[$i] = 0
		$ProfileArray[$i][0] = "Enter Profile Name"
		$ProfileArray[$i][1] = "Enter Account"
		$ProfileArray[$i][2] = ""
		$ProfileArray[$i][3] = "Enter Character Name"
		$ProfileArray[$i][4] = "Enter Game Name Prefix"
		$ProfileArray[$i][5] = "Enter Game Password"
		$ProfileArray[$i][6] = "C:\Program Files\Diablo II\"
		$ProfileArray[$i][7] = ""
		$ProfileArray[$i][8] = ""
		$ProfileArray[$i][9] = ""
		$ProfileArray[$i][10] = "-w -ns -lq"
		$ProfileArray[$i][11] = ""
		$ProfileArray[$i][12] = "D2BotLead.dbj"
		$ProfileArray[$i][13] = ""
		$ProfileArray[$i][14] = 1
		$ProfileArray[$i][15] = ""
		$ProfileArray[$i][16] = ""
		$ProfileArray[$i][17] = 0
		$ProfileArray[$i][18] = 0
		$ProfileArray[$i][19] = 0
	Next 
	
	If _FileReadToArray(@ScriptDir & "\profile.ini", $ProfileIni) then
		For $i = 0 to $ProfileIni[0]-1
			Local $profile_row = StringSplit($ProfileIni[$i+1], ",")
			$ProfileArray[$i][$Profile] = $profile_row[1]  ; profile name
			$ProfileArray[$i][$Account] = $profile_row[2]  ; d2 account
			$ProfileArray[$i][$Password] = $profile_row[3]  ; d2 password
			$ProfileArray[$i][$Character] = $profile_row[4]  ; d2 character
			$ProfileArray[$i][$GameName] = $profile_row[5]  ; game name
			$ProfileArray[$i][$GamePass] = $profile_row[6]  ; game pass
			$ProfileArray[$i][$D2Path] = $profile_row[7]  ; d2 path
			$ProfileArray[$i][$Realm] = $profile_row[8]  ; realm
			$ProfileArray[$i][$Mode] = $profile_row[9]  ; mode
			$ProfileArray[$i][$Difficulty] = $profile_row[10]  ; difficulty
			$ProfileArray[$i][$Parameters] = $profile_row[11]; parameters
			$ProfileArray[$i][$RunsPerKey] = $profile_row[12]; runs/key
			$ProfileArray[$i][$Entry] = $profile_row[13]; entry
			$ProfileArray[$i][$Cdkey] = $profile_row[14]; cdkey (change new line to |)
			$ProfileArray[$i][$CdkeyIndex] = 1
			$ProfileArray[$i][$D2PID] = 0
			$ProfileArray[$i][$D2hWnd] = 0
			$ProfileArray[$i][$Runs] = $profile_row[18]
			$ProfileArray[$i][$Restarts] = $profile_row[19]
			$ProfileArray[$i][$Chickens] = $profile_row[20]
		Next
	EndIf
	
EndFunc

Func LoadKeyHandler()
	For $i = 0 to $ProfileIni[0]-1
		Local $cdkey_list = StringSplit($ProfileArray[$i][$Cdkey], "|")
		For $j = 0 to $cdkey_list[0]
			$CDKeyHandle[$i][$j] = $cdkey_list[$j]
		Next
	Next 
EndFunc


Func InitializeGUI()
	$WIN_Main = GUICreate("D2Bot Console", 580, 450, 200) 
	GUISetOnEvent($GUI_EVENT_CLOSE, "ExitProgram")
	
	$WIN_Menu_File = _GUICtrlMenu_CreateMenu()
    _GUICtrlMenu_InsertMenuItem ($WIN_Menu_File, 0, "&Start All", $idStartAll)
    _GUICtrlMenu_InsertMenuItem ($WIN_Menu_File, 1, "&Stop All", $idStopAll)
	_GUICtrlMenu_InsertMenuItem ($WIN_Menu_File, 2, "&Save", $idSaveAll)
    _GUICtrlMenu_InsertMenuItem ($WIN_Menu_File, 3, "", 0)
    _GUICtrlMenu_InsertMenuItem ($WIN_Menu_File, 4, "&Exit", $idExit)
	
	$WIN_Menu_Options = _GUICtrlMenu_CreateMenu()
    _GUICtrlMenu_InsertMenuItem ($WIN_Menu_Options, 0, "&Start Hidden", $idStartHidden)
    _GUICtrlMenu_InsertMenuItem ($WIN_Menu_Options, 1, "&Hide All", $idHideAll)
    _GUICtrlMenu_InsertMenuItem ($WIN_Menu_Options, 2, "&Show All", $idShowAll)
	_GUICtrlMenu_InsertMenuItem ($WIN_Menu_Options, 3, "Generate D2BS Profile", $idProfile)
	
	$WIN_Menu_Main = _GUICtrlMenu_CreateMenu ()
	_GUICtrlMenu_InsertMenuItem ($WIN_Menu_Main, 0, "&File", 0, $WIN_Menu_File)
	_GUICtrlMenu_InsertMenuItem ($WIN_Menu_Main, 1, "&Options", 0, $WIN_Menu_Options)

	$WIN_Profile = GUICtrlCreateGroup("Profile", 10, 10, 560, 247)
	$WIN_Start = GUICtrlCreateButton("Start", 15, 223, 70)
	GUICtrlSetOnEvent($WIN_Start, "Start")
	$WIN_Stop = GUICtrlCreateButton("Stop", 95, 223, 70)
	GUICtrlSetOnEvent($WIN_Stop, "Stop")
	$WIN_Add = GUICtrlCreateButton("Add", 175, 223, 70)
	GUICtrlSetOnEvent($WIN_Add, "Add")
	$WIN_Remove = GUICtrlCreateButton("Remove", 255, 223, 70)
	GUICtrlSetOnEvent($WIN_Remove, "Remove")
	$WIN_Edit = GUICtrlCreateButton("Edit", 335, 223, 70)
	GUICtrlSetOnEvent($WIN_Edit, "Edit")

	$WIN_Hide = GUICtrlCreateButton("Hide", 415, 223, 70)
	GUICtrlSetOnEvent($WIN_Hide, "Hide")
	$WIN_Show = GUICtrlCreateButton("Show", 495, 223, 70)
	GUICtrlSetOnEvent($WIN_Show, "Show")

	$WIN_Log = GuiCtrlCreateTab(10, 270, 560, 169)
	GuiCtrlCreateTabItem("Console")
	$WIN_Log_Console = GuiCtrlCreateEdit("", 15, 287, 552, 150, BITOR($WS_VSCROLL, $ES_WANTRETURN), $WS_EX_TRANSPARENT)
	GuiCtrlCreateTabItem("Pickup Log")
	$WIN_Log_Pickup = GuiCtrlCreateEdit("", 15, 287, 552, 150, BITOR($WS_VSCROLL, $ES_WANTRETURN), $WS_EX_TRANSPARENT)
	GuiCtrlCreateTabItem("")

	$WIN_ConsoleArray = GUICtrlCreateListView("Profile Name|Status|Runs|Restarts|Chickens| MPQ", 20, 28, 540, 190, $LVS_SHOWSELALWAYS, bitor($LVS_EX_FULLROWSELECT, $LVS_EX_GRIDLINES))
	GUICtrlSendMsg(-1, $LVM_SETCOLUMNWIDTH, 0, 120)
	GUICtrlSendMsg(-1, $LVM_SETCOLUMNWIDTH, 1, 145)
	GUICtrlSendMsg(-1, $LVM_SETCOLUMNWIDTH, 2, 60)
	GUICtrlSendMsg(-1, $LVM_SETCOLUMNWIDTH, 3, 60)
	GUICtrlSendMsg(-1, $LVM_SETCOLUMNWIDTH, 4, 60)
	GUICtrlSendMsg(-1, $LVM_SETCOLUMNWIDTH, 5, 73)
	
	If $ProfileIni[0] > 0 Then
		For $i = 0 to $ProfileIni[0]-1
			GuiCtrlCreateListViewItem($ProfileArray[$i][0]&"||"&$ProfileArray[$i][$Runs]&"|"&$ProfileArray[$i][$Restarts]&"|"&$ProfileArray[$i][$Chickens], $WIN_ConsoleArray)
		Next
	EndIf
	While _GUICtrlListView_GetItemCount($WIN_ConsoleArray) < 9
		GuiCtrlCreateListViewItem("", $WIN_ConsoleArray)
	WEnd	
	_GUICtrlMenu_SetMenu($WIN_Main, $WIN_Menu_Main)
	GUISetState(@SW_SHOW)
EndFunc

Func Edit()
	For $i = 0 to $ProfileIni[0]-1
		If _GUICtrlListView_GetItemSelected($WIN_ConsoleArray, $i) Then
			If Not WinExists("Profile Editor") Then
				Return OpenProfileEditor($i)
			EndIf
		EndIf
	Next 
EndFunc

Func OpenProfileEditor($i) 
	$SUBWIN_Profile = GUICreate("Profile Editor", 290, 450, 800)
	GUISetOnEvent($GUI_EVENT_CLOSE, "ExitProfile", $SUBWIN_Profile)
	GuiCtrlCreatelabel("Profile Name", 10, 14); 
	$SUBWIN_Name = GuiCtrlCreateInput($ProfileArray[$i][0], 80, 10, 200, 20); 
	GuiCtrlCreatelabel("Account", 10, 44);
	$SUBWIN_Username = GuiCtrlCreateInput($ProfileArray[$i][1], 80, 40, 200, 20); 
	GuiCtrlCreatelabel("Password", 10, 74);
	$SUBWIN_Password = GuiCtrlCreateInput($ProfileArray[$i][2], 80, 70, 200, 20, $ES_PASSWORD); 
	GuiCtrlCreatelabel("Character", 10, 104);
	$SUBWIN_Character = GuiCtrlCreateInput($ProfileArray[$i][3], 80, 100, 200, 20); 
	GuiCtrlCreatelabel("Game Name", 10, 134);
	$SUBWIN_GameName = GuiCtrlCreateInput($ProfileArray[$i][4], 80, 130, 200, 20);
	GuiCtrlCreatelabel("Game Pass", 10, 164);
	$SUBWIN_GamePass = GuiCtrlCreateInput($ProfileArray[$i][5], 80, 160, 200, 20); 
	GuiCtrlCreatelabel("Diablo Path", 10, 284);
	$SUBWIN_D2Path = GuiCtrlCreateInput($ProfileArray[$i][$D2Path], 80, 280, 181, 20); 
	GUICtrlCreateButton("!", 260, 279, 21, 21, $BS_ICON, $WS_EX_WINDOWEDGE)
	GUICtrlSetImage(-1, "shell32.dll", 46, 0)
	GUICtrlSetOnEvent(-1, "FindD2Path")	
	GuiCtrlCreatelabel("Difficulty", 10, 194);
	$SUBWIN_Difficulty = GuiCtrlCreateCombo("Hell", 80, 190, 200, 20);
	GUICtrlSetData(-1,"Nightmare|Normal", $ProfileArray[$i][$Difficulty]) 
	GuiCtrlCreatelabel("Realm", 10, 224);
	$SUBWIN_Realm = GuiCtrlCreateCombo("U.S. East", 80, 220, 200, 20);
	GUICtrlSetData(-1,"U.S. West|Europe", $ProfileArray[$i][7]) 
	GuiCtrlCreatelabel("Mode", 10, 254);
	$SUBWIN_Mode = GuiCtrlCreateCombo("Battle.net", 80, 250, 200, 20);
	GUICtrlSetData(-1,"Single Player", $ProfileArray[$i][8]) 
	GuiCtrlCreateLabel("Parameters", 10, 314); 
	$SUBWIN_Cmdline = GuiCtrlCreateInput($ProfileArray[$i][10], 80, 310, 200, 20)
	GuiCtrlCreateLabel("Cdkey MPQ", 10, 344); 
	$SUBWIN_Cdkey = GuiCtrlCreateEdit(StringReplace($ProfileArray[$i][13],"|",@CRLF), 80, 340, 90, 100, BITOR($WS_VSCROLL, $ES_WANTRETURN))
	GuiCtrlCreateLabel("Runs/Key", 178, 344); 
	$SUBWIN_Runsperkey = GuiCtrlCreateInput($ProfileArray[$i][11], 230, 340, 50, 20)
	GuiCtrlCreateLabel("Entry", 178, 374); 
	local $SUBWIN_Array = _FileListToArray(@ScriptDir & "\D2BS\scripts-ntbot\", "*.dbj", 1)
	$SUBWIN_Entry = GUICtrlCreateCombo($ProfileArray[$i][$Entry], 205, 370, 75, 20)
	For $i = 1 To $SUBWIN_Array[0]
		GUICtrlSetData(-1, $SUBWIN_Array[$i], "")
	Next
	$SUBWIN_Updateprofile = GUICtrlCreateButton("Update Profile", 178, 400, 102, 40, $BS_MULTILINE)
	GUICtrlSetOnEvent($SUBWIN_Updateprofile, "UpdateProfile")
	GUISetState(@SW_SHOW)
	Return $GUI_RUNDEFMSG
EndFunc

Func UpdateProfile()	
	For $i = 0 to $ProfileIni[0]-2
		If _GUICtrlListView_GetItemSelected($WIN_ConsoleArray, $i) Then 
			ExitLoop
		EndIf
	Next 
	$ProfileArray[$i][$Profile] = GUICtrlRead($SUBWIN_Name)  ; profile name
	$ProfileArray[$i][$Account] = GUICtrlRead($SUBWIN_Username)  ; d2 account
	$ProfileArray[$i][$Password] = GUICtrlRead($SUBWIN_Password)  ; d2 password
	$ProfileArray[$i][$Character] = GUICtrlRead($SUBWIN_Character)  ; d2 character
	$ProfileArray[$i][$GameName] = GUICtrlRead($SUBWIN_GameName)  ; game name
	$ProfileArray[$i][$GamePass] = GUICtrlRead($SUBWIN_GamePass)  ; game pass
	$ProfileArray[$i][$D2Path] = GUICtrlRead($SUBWIN_D2Path)  ; d2 path
	$ProfileArray[$i][$Realm] = GUICtrlRead($SUBWIN_Realm)  ; realm
	$ProfileArray[$i][$Mode] = GUICtrlRead($SUBWIN_Mode)  ; mode
	$ProfileArray[$i][$Difficulty] = GUICtrlRead($SUBWIN_Difficulty)  ; difficulty
	$ProfileArray[$i][$Parameters] = GUICtrlRead($SUBWIN_CmdLine); parameters
	$ProfileArray[$i][$RunsPerKey] = GUICtrlRead($SUBWIN_Runsperkey); runs/key
	$ProfileArray[$i][$Entry] = GUICtrlRead($SUBWIN_Entry); entry
	$ProfileArray[$i][$Cdkey] = StringReplace(StringStripWS(GUICtrlRead($SUBWIN_Cdkey),2),@CRLF, "|"); cdkey (change new line to |)
	;$ProfileArray[$i][$D2PID] = 0
	;$ProfileArray[$i][$D2hWnd] = 0
	$ProfileArray[$i][$Runs] = 0
	$ProfileArray[$i][$Chickens] = 0
	$ProfileArray[$i][$Restarts] = 0
	SaveProfile($i)
	_GUICtrlListView_SetItem($WIN_ConsoleArray, $ProfileArray[$i][0], $i)
	_GUICtrlListView_SetItem($WIN_ConsoleArray, $ProfileArray[$i][$Runs], $i, 2)
	_GUICtrlListView_SetItem($WIN_ConsoleArray, $ProfileArray[$i][$Chickens], $i, 4)
	_GUICtrlListView_SetItem($WIN_ConsoleArray, $ProfileArray[$i][$Restarts], $i, 3)
	LoadKeyHandler()
	GUIDelete($SUBWIN_Profile)
EndFunc

Func SaveProfile($i)
	_FileWriteToLine( @ScriptDir & "\profile.ini", $i+1, $ProfileArray[$i][0]&","&$ProfileArray[$i][1]&","&$ProfileArray[$i][2]&","&$ProfileArray[$i][3]&","&$ProfileArray[$i][4]&","&$ProfileArray[$i][5]&","&$ProfileArray[$i][6]&","&$ProfileArray[$i][7]&","&$ProfileArray[$i][8]&","&$ProfileArray[$i][9]&","&$ProfileArray[$i][10]&","&$ProfileArray[$i][11]&","&$ProfileArray[$i][12]&","&$ProfileArray[$i][13]&","&$ProfileArray[$i][14]&","&$ProfileArray[$i][15]&","&$ProfileArray[$i][16]&","&$ProfileArray[$i][$Runs]&","&$ProfileArray[$i][$Restarts]&","&$ProfileArray[$i][$Chickens],1)
EndFunc

Func Add()
	If WinExists("Profile Editor") Then
		Return 
	EndIf
	local $count = _GUICtrlListView_GetItemCount($WIN_ConsoleArray)
	For $i = 0 to $count-1
		If _GUICtrlListView_GetItemSelected($WIN_ConsoleArray, $i) Then
			_GUICtrlListView_SetItemSelected($WIN_ConsoleArray, $i, False)
		EndIf
		If $ProfileArray[$i][$Profile] = "Enter Profile Name" Then
			$ProfileIni[0] += 1
			_GUICtrlListView_SetItemSelected($WIN_ConsoleArray, $i)
			Return OpenProfileEditor($i)
		EndIf 
	Next 
	GuiCtrlCreateListViewItem("||0|0|0", $WIN_ConsoleArray)
	$ProfileIni[0] += 1
	Return OpenProfileEditor($count)
EndFunc
	
Func Remove()
	For $i = 0 to $ProfileIni[0]-1
		If _GUICtrlListView_GetItemSelected($WIN_ConsoleArray, $i) Then
			_FileWriteToLine(@ScriptDir & "\profile.ini", $i+1,"",1)
			ExitLoop
		EndIf
	Next
	_GUICtrlListView_DeleteItemsSelected($WIN_ConsoleArray)
	While _GUICtrlListView_GetItemCount($WIN_ConsoleArray) < 9
		GuiCtrlCreateListViewItem("", $WIN_ConsoleArray)
	WEnd	
	LoadProfileArray() 
EndFunc

Func GenerateD2BSProfile()
	local $farray
	_FileReadToArray(@ScriptDir & "\D2BS\d2bs.ini", $farray)
	For $i = 63 to $farray[0]
		_ArrayDelete($farray, $i)
	Next
	_FileWriteFromArray(@ScriptDir & "\D2BS\d2bs.ini", $farray, 1, $farray[0])
	local $j = 63; 
	For $i = 0 to $ProfileIni[0]-1
		_FileWriteToLine(@ScriptDir & "\D2BS\d2bs.ini", $j,"["&$profileArray[$i][0]&"]"&@CRLF&"Mode = "&$profileArray[$i][8]&@CRLF&"Username = "&$profileArray[$i][1]&@CRLF&"Password = "&$profileArray[$i][2]&@CRLF&"gateway = "&$profileArray[$i][7]&@CRLF&"character = "&$profileArray[$i][3]&@CRLF&"ScriptPath=scripts-ntbot"&@CRLF&"DefaultGameScript=default.dbj"&@CRLF&"DefaultStarterScript="&$profileArray[$i][12], 1)
		$j = $j + 9
	Next
EndFunc

Func LaunchD2Multi($mpq = "",$gameParms = "",$title = "", $cachefix = true)
	Local $parms
	If Not $mpq = "" Then $parms &= ' -mpq "'&$mpq&'"'
	If Not $title = "" Then
		$parms &= ' -title "'&$title&'"'
	EndIf
	If $cachefix = true then $parms &= ' -cachefix'
	If Not $gameParms = "" Then $parms &= " "&$gameParms
	Local $runa = run(@ComSpec & " /c D2Multi.exe " & $parms,@ScriptDir & "\D2Multi\", @SW_HIDE)
	If $runa = 0 then 
		Return 0
	EndIf
	While Not WinExists($title)
		sleep(10)
	WEnd
	local $pid = WinGetProcess($title)
	Return $pid
EndFunc

Func ExitProgram()
	For $i = 0 to $ProfileIni[0]-1
		If $ProfileArray[$i][15] <> 0 Then
			StopProfile($i)
		EndIf
	Next
	Exit
EndFunc

Func ExitProfile()
	GUIDelete($SUBWIN_Profile)
	Return $GUI_RUNDEFMSG
EndFunc

Func SendCopyData($hwnd, $message, $cmd = 4919)
	$hwnd = WinGetHandle($hwnd)
	If Not WinExists($hwnd) Then
		$hwnd = WinGetHandle($hwnd)
	EndIf
	If Not WinExists($hwnd) Then Return
	local $struct = DllStructCreate('char var1['&StringLen($message)+1&']')
	DllStructSetData($Struct,1,$message)
	local $pStruct = DllStructGetPtr($struct)
	local $struct2 = DllStructCreate('int_ptr;dword;ptr')
	DllStructSetData($struct2,1, $cmd)
	DllStructSetData($struct2,2,StringLen($message)+1)
	DllStructSetData($struct2,3,$pStruct)
	local $pStruct2 = DllStructGetPtr($struct2)
	Return _SendMessage($hwnd, 0x4A, $hwnd, $pStruct2)
EndFunc

Func RecieveCopyData( $hWnd, $MsgID, $WParam, $LParam)
	local $vs_cds = DllStructCreate("int_ptr;dword;ptr", $LParam)
	local $vs_msg = DllStructCreate("char[1024]", DllStructGetData($vs_cds, 3))
	local $CmdLen = DllStructGetData($vs_cds, 2)
	local $cmd = StringLeft(DllStructGetData($vs_msg, 1), $CmdLen)
	local $cmdType = DllStructGetData($vs_cds, 1)
	For $i = 0 to UBound($ProfileIni)-1
		If WinGetTitle($WParam) == $ProfileArray[$i][$Profile] Then
			ExitLoop
		EndIf
	Next
	If $i > UBound($ProfileIni)-1 Then
		Return 0
	EndIf	
	local $argc = StringSplit($cmd, ";")
	Switch $argc[1] ;function name
		Case "updateStatus"
			UpdateStatus($i, $argc[2])
		Case "updateRuns"
			UpdateRuns($i)
		Case "updateChickens"
			UpdateChickens($i)
		Case "CDKeyInUse"
			PrintToConsole($i, $CDKeyHandle[$i][$ProfileArray[$i][$CdkeyIndex]]&" was in use!")
		Case "printToConsole"
			PrintToConsole($i, $argc[2])
		Case "printToItemLog"
			PrintToItemLog($i, $argc[2])
		Case "restartProfile"
			If $argc[0] > 1 Then
				If $argc[2] = "true" Then 
					PrintToConsole($i, $CDKeyHandle[$i][$ProfileArray[$i][$CdkeyIndex]]&" was last used ...going to next keyset")
					IncrementCdkeyHandler($i)
				EndIf
			EndIf
			StopProfile($i)
			PrintToConsole($i, "Restarting")
			StartProfile($i)
			UpdateRestarts($i)
		Case "requestGameInfo"
			SendCopyData($ProfileArray[$i][$Profile], $ProfileArray[$i][$GameName]&"/"&$ProfileArray[$i][$GamePass]&"/"&$ProfileArray[$i][$Difficulty], 0x2)
	EndSwitch
	Return 1
EndFunc

Func MenuHandle($hWnd, $iMsg, $iwParam, $ilParam)
    Switch _WinAPI_LoWord ($iwParam)
		Case $idStartAll
			For $i = 0 to $ProfileIni[0]-1
				StartProfile($i)
			Next
        Case $idStopAll
			For $i = 0 to $ProfileIni[0]-1
				StopProfile($i)
			Next
        Case $idExit				
			ExitProgram()
        Case $idStartHidden
			If $WIN_Menu_Toggle Then
				$WIN_Menu_Toggle = False
			Else 
				$WIN_Menu_Toggle = True
			EndIf
            _GUICtrlMenu_CheckMenuItem($WIN_Menu_Options, 0, $WIN_Menu_Toggle)
        Case $idHideAll
			For $i = 0 to $ProfileIni[0]-1
				if $ProfileArray[$i][$D2PID] <> 0 Then
					HideProfile($i)
				EndIf
			Next
        Case $idShowAll
			For $i = 0 to $ProfileIni[0]-1
				Local $idTempa = _GUICtrlListView_GetItem($WIN_ConsoleArray, $i, 1)
				If $idTempa[3]=="Running" Then
					ShowProfile($i)
				EndIf
			Next
		Case $idSaveAll
			For $i = 0 to $ProfileIni[0]-1
				Local $idTempa = _GUICtrlListView_GetItem($WIN_ConsoleArray, $i, 2)
				Local $idTempb = _GUICtrlListView_GetItem($WIN_ConsoleArray, $i, 4)
				Local $idTempc = _GUICtrlListView_GetItem($WIN_ConsoleArray, $i, 3)
				$ProfileArray[$i][$Runs] = $idTempa[3]
				$ProfileArray[$i][$Chickens] = $idTempb[3]
				$ProfileArray[$i][$Restarts] = $idTempc[3]
				SaveProfile($i)
			Next
		Case $idProfile
			GenerateD2BSProfile()
    EndSwitch
    Return $GUI_RUNDEFMSG
EndFunc  

Func Start()
	For $i = 0 to $ProfileIni[0]-1
		If _GUICtrlListView_GetItemSelected($WIN_ConsoleArray, $i) Then
			StartProfile($i)
		EndIf
	Next 
EndFUnc

Func StartProfile($i)
	If $ProfileArray[$i][0] = "Enter Profile Name" Then
		Return 0
	EndIf
	If WinExists($ProfileArray[$i][0]) Then
		If $ProfileArray[$i][$D2PID] = 0 Then
			WinKill($ProfileArray[$i][0])
		Else
			Return 0
		EndIf
	EndIf
	UpdateStatus($i, "Loading")
	UpdateMPQ($i, $CDKeyHandle[$i][$ProfileArray[$i][$CdkeyIndex]])
	
	_FileWriteToLine(@ScriptDir & "\D2Multi\D2Multi.ini" , 2, "D2Folder = '"&$ProfileArray[$i][$D2Path]&"'", 1)

	$ProfileArray[$i][$D2PID] = LaunchD2Multi($CDKeyHandle[$i][$ProfileArray[$i][14]], $ProfileArray[$i][$Parameters], $ProfileArray[$i][$Profile]); 
	If $ProfileArray[$i][$D2PID] = 0 Then
		UpdateStatus($i, "Bad Path")
		Return
	EndIf
	$ProfileArray[$i][$D2hWnd] = WinWaitActive($ProfileArray[$i][$Profile],"")
	If $WIN_Menu_Toggle Then
		HideProfile($i)
	Else 	
		SendCopyData($ProfileArray[$i][0], 0x0112, 0xF020)
		WinSetState($ProfileArray[$i][0],"",@SW_MINIMIZE)	
	EndIf	
	RunWait(@ComSpec & " /c D2BS.exe --inject --pid " & $ProfileArray[$i][$D2PID],@ScriptDir & "\D2BS\",@SW_HIDE)
	UpdateStatus($i, "Running")
	SendCopyData($ProfileArray[$i][0], $ProfileArray[$i][0], 0x31337);
EndFunc

Func Stop()
	For $i = 0 to $ProfileIni[0]-1
		If _GUICtrlListView_GetItemSelected($WIN_ConsoleArray, $i) Then
			StopProfile($i)
		EndIf
	Next 
EndFunc

Func StopProfile($i)
	If BitOR($ProfileArray[$i][$D2PID], $ProfileArray[$i][$D2hWnd])  <> 0 Then 
		$ProfileArray[$i][$D2hWnd] = 0; 
		$ProfileArray[$i][$D2PID] = 0; 
		WinClose($ProfileArray[$i][0])
		WinWaitClose($ProfileArray[$i][0])
		UpdateStatus($i, "Stopped")
	EndIf
EndFunc

Func IncrementCdkeyHandler($i) 
	If $ProfileArray[$i][$CdkeyIndex] == $CDKeyHandle[$i][0] Then
		$ProfileArray[$i][$CdkeyIndex] = 1
	Else 
		$ProfileArray[$i][$CdkeyIndex] += 1
	EndIf 
EndFunc

Func CheckInstances()
	CrashCheck()
	For $i = 0 to $ProfileIni[0]
		If $ProfileArray[$i][15] <> 0 Then
			If Not WinExists($ProfileArray[$i][0]) Then
				PrintToConsole($i, "Could not find window... Restarting")
				StartProfile($i)
			EndIf
			if $ProfileArray[$i][$RunsPerKey] Then
				local $aTemp = $CDKeyCounter[$i] - $ProfileArray[$i][$RunsPerKey]
				If $aTemp = 0 Then
					$CDKeyCounter[$i] = 0
					IncrementCdkeyHandler($i)
					StopProfile($i)
					StartProfile($i)
					UpdateRestarts($i)
				EndIf 
			EndIf
		EndIf
	Next
EndFunc

Func UpdateStatus($i, $msg)
	_GUICtrlListView_SetItem($WIN_ConsoleArray, $msg, $i, 1)
EndFunc

Func UpdateRuns($i)
	$ProfileArray[$i][$Runs] += 1
	$CDKeyCounter[$i] += 1
	_GUICtrlListView_SetItem($WIN_ConsoleArray, $ProfileArray[$i][$Runs], $i, 2)
EndFunc

Func UpdateRestarts($i)
	$ProfileArray[$i][$Restarts] += 1
	_GUICtrlListView_SetItem($WIN_ConsoleArray, $ProfileArray[$i][$Restarts], $i, 3)	
EndFunc

Func UpdateChickens($i)
	$ProfileArray[$i][$Chickens] += 1
	_GUICtrlListView_SetItem($WIN_ConsoleArray, $ProfileArray[$i][$Chickens], $i, 4)
EndFunc

Func UpdateMPQ($i, $mpq)
	_GUICtrlListView_SetItem($WIN_ConsoleArray, $mpq, $i, 5)
EndFunc 

Func PrintToConsole($i, $msg)
	If GUICtrlRead ($WIN_Log_Console) Then
		$msg = @CRLF&"["&@Hour & ":" & @Min & ":" & @Sec&"] "&$ProfileArray[$i][0]&": "&$msg
	Else
		$msg = "["&@Hour & ":" & @Min & ":" & @Sec&"] "&$ProfileArray[$i][0]&": "&$msg
	EndIf
	_GUICtrlEdit_AppendText( $WIN_Log_Console, $msg)
EndFunc

Func PrintToItemLog($i, $msg)
	If GUICtrlRead ($WIN_Log_Pickup) Then
		$msg = @CRLF&"["&@Hour & ":" & @Min & ":" & @Sec&"] "&$ProfileArray[$i][0]&": "&$msg
	Else
		$msg = "["&@Hour & ":" & @Min & ":" & @Sec&"] "&$ProfileArray[$i][0]&": "&$msg
	EndIf
	_GUICtrlEdit_AppendText( $WIN_Log_Pickup, $msg)	
EndFunc

Func Hide()
	For $i = 0 to $ProfileIni[0]-1
		If _GUICtrlListView_GetItemSelected($WIN_ConsoleArray, $i) Then
			Return HideProfile($i)
		EndIf
	Next 	
EndFunc

Func HideProfile($i)
	SendCopyData($ProfileArray[$i][0], 0x0112, 0xF020)
	WinSetState($ProfileArray[$i][0],"",@SW_MINIMIZE)
	WinSetState($ProfileArray[$i][0],"",@SW_HIDE)
EndFunc

Func Show()
	For $i = 0 to $ProfileIni[0]-1
		If _GUICtrlListView_GetItemSelected($WIN_ConsoleArray, $i) Then
			Return ShowProfile($i)
		EndIf
	Next 
EndFunc

Func ShowProfile($i)
	WinSetState($ProfileArray[$i][0],"",@SW_SHOW)
EndFunc 

Func CrashCheck()
	Opt("WinTitleMatchMode", 2)
	If  WinExists("Hey guys") Then
		WinClose("Hey guys")
	ElseIf WinExists("Not Responding") Then
		WinClose("Not Responding")
	ElseIf WinExists("Error") Then
		WinClose("Error")
	ElseIf WinExists("Exception") Then
		WinClose("Exception")	
	ElseIf WinExists("Just-In-Time") Then
		WinClose("Just-In-Time")		
	EndIf
	Opt("WinTitleMatchMode", 3)
EndFunc
	
Func FindD2Path()
	local $atemp = _WinAPI_GetOpenFileName("Diablo II Path", "Diablo II (game.exe)", @DesktopDir)
	If $atemp[1] Then
		GUICtrlSetData($SUBWIN_D2Path, $atemp[1]&"\")
	EndIf 
EndFunc

