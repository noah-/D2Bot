////////////////////////////////////////////////////////////////////////////////
// Spots to use in NTTM_TownMove
//==============================================================================
//     A1            A2            A3            A4            A5
//------------------------------------------------------------------------------
// "waypoint"    "waypoint"    "waypoint"    "waypoint"    "waypoint"
// "portalspot"  "portalspot"  "portalspot"  "portalspot"  "portalspot"
// "exit"        "exit"        "exit"        "exit"        "exit"
// "stash"       "stash"       "stash"       "stash"       "stash"
// "gheed"       "fara"        "cain"        "cain"        "larzuk"
// "charsi"      "cain"        "alkor"       "halbu"       "malah"
// "akara"       "lysander"    "asheara"     "tyrael"      "cain"
// "kashya"      "greiz"       "ormus"       "jamella"     "qual-kehk"
// "cain"        "elzix"       "hratli"                    "anya"
// "warriv"      "palace"      "meshif"                    "portal"
//               "sewers"                                  "nihlathak"
//               "meshif"
//               "drognan"
//               "warriv"
//               "atma"
////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// Exit flags for Act 1
//////////////////////////////////////////////////////////////////////
const _NTTM_Act1SouthExit = 0;
const _NTTM_Act1NorthExit = 1;
const _NTTM_Act1WestExit = 2;
const _NTTM_Act1EastExit = 3;
var _NTTM_Act1Exit;

var _movepoints = new Array(5);

// act 1
_movepoints[0] = new Array();

// act 2
_movepoints[1] = new Array();
_movepoints[1][0] = new coord();
_movepoints[1][1] = new coord();
_movepoints[1][2] = new coord(5021,5067);
_movepoints[1][3] = new coord(5033,5063);
_movepoints[1][4] = new coord(5033,5052);
_movepoints[1][5] = new coord(5046,5054);
_movepoints[1][6] = new coord(5043,5064);
_movepoints[1][7] = new coord(5057,5061);
_movepoints[1][8] = new coord(5070,5060);
_movepoints[1][9] = new coord(5084,5060);
_movepoints[1][10] = new coord(5096,5060);
_movepoints[1][11] = new coord(5098,5048);
_movepoints[1][12] = new coord(5098,5035);
_movepoints[1][13] = new coord(5097,5073);
_movepoints[1][14] = new coord(5096,5087);
_movepoints[1][15] = new coord(5082,5085);
_movepoints[1][16] = new coord(5070,5081);
_movepoints[1][17] = new coord(5070,5071);
_movepoints[1][18] = new coord(5068,5093);
_movepoints[1][19] = new coord(5055,5093);
_movepoints[1][20] = new coord(5041,5091);
_movepoints[1][21] = new coord(5036,5080);
_movepoints[1][22] = new coord(5036,5069);
_movepoints[1][23] = new coord(5034,5098);
_movepoints[1][24] = new coord(5095,5100);
_movepoints[1][25] = new coord(5104,5094);
_movepoints[1][26] = new coord(5115,5096);
_movepoints[1][27] = new coord(5120,5105);
_movepoints[1][28] = new coord(5125,5117);
_movepoints[1][29] = new coord(5115,5086);
_movepoints[1][30] = new coord(5122,5082);
_movepoints[1][31] = new coord(5126,5070);
_movepoints[1][32] = new coord(5117,5060);
_movepoints[1][33] = new coord(5104,5059);
_movepoints[1][34] = new coord(5130,5061);
_movepoints[1][35] = new coord(5144,5060);
_movepoints[1][36] = new coord(5158,5060);
_movepoints[1][37] = new coord(5171,5060);
_movepoints[1][38] = new coord(5185,5059);
_movepoints[1][39] = new coord(5198,5059);
_movepoints[1][40] = new coord(5207,5050);
_movepoints[1][41] = new coord(5207,5064);
_movepoints[1][42] = new coord(5207,5077);
_movepoints[1][43] = new coord(5208,5091);
_movepoints[1][44] = new coord(5208,5103);
_movepoints[1][45] = new coord(5207,5117);
_movepoints[1][46] = new coord(5208,5131);
_movepoints[1][47] = new coord(5208,5145);
_movepoints[1][48] = new coord(5213,5153);
_movepoints[1][49] = new coord(5217,5166);
_movepoints[1][50] = new coord(5221,5179);
_movepoints[1][51] = new coord(5196,5152);
_movepoints[1][52] = new coord(5185,5144);
_movepoints[1][53] = new coord(5176,5133);
_movepoints[1][54] = new coord(5182,5125);
_movepoints[1][55] = new coord(5164,5126);
_movepoints[1][56] = new coord(5150,5126);
_movepoints[1][57] = new coord(5134,5126);
_movepoints[1][58] = new coord(5124,5129);
_movepoints[1][59] = new coord(5125,5142);
_movepoints[1][60] = new coord(5126,5156);
_movepoints[1][61] = new coord(5126,5170);
_movepoints[1][62] = new coord(5129,5183);
_movepoints[1][63] = new coord(5141,5189);
_movepoints[1][64] = new coord(5151,5199);
_movepoints[1][65] = new coord(5114,5155);
_movepoints[1][66] = new coord(5101,5155);
_movepoints[1][67] = new coord(5088,5155);
_movepoints[1][68] = new coord(5075,5150);
_movepoints[1][69] = new coord(5062,5144);
_movepoints[1][70] = new coord(5100,5143);
_movepoints[1][71] = new coord(5099,5130);
_movepoints[1][72] = new coord(5097,5118);
_movepoints[1][73] = new coord(5106,5124);
_movepoints[1][74] = new coord(5117,5126);
_movepoints[1][75] = new coord(5097,5104);
_movepoints[1][76] = new coord(5086,5126);
_movepoints[1][77] = new coord(5074,5125);
_movepoints[1][78] = new coord(5060,5124);
_movepoints[1][79] = new coord(5047,5118);
_movepoints[1][80] = new coord(5037,5109);
_movepoints[1][81] = new coord(5186,5112);
_movepoints[1][82] = new coord(5185,5099);
_movepoints[1][83] = new coord(5185,5085);
_movepoints[1][84] = new coord(5185,5073);
_movepoints[1][85] = new coord(5097,5023);

// act 3
_movepoints[2] = new Array();
_movepoints[2][0] = new coord();
_movepoints[2][1] = new coord();
_movepoints[2][2] = new coord(5120,5168);
_movepoints[2][3] = new coord(5132,5162);
_movepoints[2][4] = new coord(5133,5148);
_movepoints[2][5] = new coord(5133,5136);
_movepoints[2][6] = new coord(5133,5124);
_movepoints[2][7] = new coord(5133,5113);
_movepoints[2][8] = new coord(5133,5103);
_movepoints[2][9] = new coord(5132,5092);
_movepoints[2][10] = new coord(5144,5092);
_movepoints[2][11] = new coord(5155,5087);
_movepoints[2][12] = new coord(5147,5078);
_movepoints[2][13] = new coord(5149,5064);
_movepoints[2][14] = new coord(5156,5056);
_movepoints[2][15] = new coord(5145,5051);
_movepoints[2][16] = new coord(5132,5048);
_movepoints[2][17] = new coord(5118,5047);
_movepoints[2][18] = new coord(5106,5048);
_movepoints[2][19] = new coord(5093,5046);
_movepoints[2][20] = new coord(5092,5034);
_movepoints[2][21] = new coord(5083,5029);
_movepoints[2][22] = new coord(5085,5016);
_movepoints[2][23] = new coord(5072,5032);
_movepoints[2][24] = new coord(5072,5046);
_movepoints[2][25] = new coord(5083,5054);
_movepoints[2][26] = new coord(5083,5068);
_movepoints[2][27] = new coord(5083,5082);
_movepoints[2][28] = new coord(5082,5093);
_movepoints[2][29] = new coord(5068,5092);
_movepoints[2][30] = new coord(5055,5092);
_movepoints[2][31] = new coord(5042,5093);
_movepoints[2][32] = new coord(5095,5092);
_movepoints[2][33] = new coord(5108,5092);
_movepoints[2][34] = new coord(5121,5092);
_movepoints[2][35] = new coord(5169,5087);
_movepoints[2][36] = new coord(5181,5087);
_movepoints[2][37] = new coord(5194,5087);
_movepoints[2][38] = new coord(5206,5087);
_movepoints[2][39] = new coord(5218,5080);
_movepoints[2][40] = new coord(5223,5068);
_movepoints[2][41] = new coord(5223,5058);
_movepoints[2][42] = new coord(5156,5062);
_movepoints[2][43] = new coord(5156,5074);

// act 4
_movepoints[3] = new Array();
_movepoints[3][0] = new coord();
_movepoints[3][1] = new coord();
_movepoints[3][2] = new coord(5044,5027);
_movepoints[3][3] = new coord(5034,5032);
_movepoints[3][4] = new coord(5046,5037);
_movepoints[3][5] = new coord(5059,5039);
_movepoints[3][6] = new coord(5072,5041);
_movepoints[3][7] = new coord(5082,5044);
_movepoints[3][8] = new coord(5087,5054);
_movepoints[3][9] = new coord(5087,5032);
_movepoints[3][10] = new coord(5094,5044);
_movepoints[3][11] = new coord(5108,5047);
_movepoints[3][12] = new coord(5118,5052);
_movepoints[3][13] = new coord(5128,5060);
_movepoints[3][14] = new coord(5133,5070);
_movepoints[3][15] = new coord(5141,5079);
_movepoints[3][16] = new coord(5151,5084);
_movepoints[3][17] = new coord(5158,5087);
_movepoints[3][18] = new coord(5024,5025);
_movepoints[3][19] = new coord(5024,5037);

// act5
_movepoints[4] = new Array();
_movepoints[4][0] = new coord();
_movepoints[4][1] = new coord();
_movepoints[4][2] = new coord(5105,5043);
_movepoints[4][3] = new coord(5104,5030);
_movepoints[4][4] = new coord(5093,5022);
_movepoints[4][5] = new coord(5087,5032);
_movepoints[4][6] = new coord(5073,5032);
_movepoints[4][7] = new coord(5072,5045);
_movepoints[4][8] = new coord(5107,5055);
_movepoints[4][9] = new coord(5117,5064);
_movepoints[4][10] = new coord(5119,5077);
_movepoints[4][11] = new coord(5122,5089);
_movepoints[4][12] = new coord(5130,5101);
_movepoints[4][13] = new coord(5131,5087);
_movepoints[4][14] = new coord(5134,5073);
_movepoints[4][15] = new coord(5133,5063);
_movepoints[4][16] = new coord(5145,5057);
_movepoints[4][17] = new coord(5135,5052);
_movepoints[4][18] = new coord(5131,5042);
_movepoints[4][19] = new coord(5116,5040);
_movepoints[4][20] = new coord(5112,5087);
_movepoints[4][21] = new coord(5099,5086);
_movepoints[4][22] = new coord(5085,5087);
_movepoints[4][23] = new coord(5083,5074);
_movepoints[4][24] = new coord(5082,5064);
_movepoints[4][25] = new coord(5078,5053);
_movepoints[4][26] = new coord(5074,5079);
_movepoints[4][27] = new coord(5064,5080);
_movepoints[4][28] = new coord(5066,5094);
_movepoints[4][29] = new coord(5078,5097);
_movepoints[4][30] = new coord(5086,5099);
_movepoints[4][31] = new coord(5088,5111);
_movepoints[4][32] = new coord(5097,5120);
_movepoints[4][33] = new coord(5110,5120);
_movepoints[4][34] = new coord(5123,5118);
_movepoints[4][35] = new coord(5133,5108);
_movepoints[4][36] = new coord(5133,5106);
_movepoints[4][37] = new coord(5081,5122);
_movepoints[4][38] = new coord(5069,5114);
_movepoints[4][39] = new coord(5056,5098);
_movepoints[4][40] = new coord(5063,5107);
_movepoints[4][41] = new coord(5042,5097);
_movepoints[4][42] = new coord(5030,5096);
_movepoints[4][43] = new coord(5126,5061);

var _townpoints = new Array(5);

// act 1
_townpoints[0] = new Object();
_townpoints[0]["gheed"] = new coord();
_townpoints[0]["charsi"] = new coord();
_townpoints[0]["akara"] = new coord();
_townpoints[0]["kashya"] = new coord();
_townpoints[0]["cain"] = new coord();
_townpoints[0]["stash"] = new coord();
_townpoints[0]["portalspot"] = new coord();
_townpoints[0]["waypoint"] = new coord();
_townpoints[0]["exit"] = new coord();
_townpoints[0]["warriv"] = new coord();

// act 2
_townpoints[1] = new Object();
_townpoints[1]["portalspot"] = new coord(5168,5055);
_townpoints[1]["stash"] = new coord(5124,5082);
_townpoints[1]["fara"] = new coord(5124,5082);
_townpoints[1]["cain"] = new coord(5124,5082);
_townpoints[1]["lysander"] = new coord(5118,5104);
_townpoints[1]["waypoint"] = new coord(5070,5083);
_townpoints[1]["greiz"] = new coord(5033,5053);
_townpoints[1]["exit"] = new coord();
_townpoints[1]["elzix"] = new coord(5032,5102);
_townpoints[1]["palace"] = new coord(5055,5142);
_townpoints[1]["sewers"] = new coord(5221,5181);
_townpoints[1]["meshif"] = new coord(5205,5058);
_townpoints[1]["drognan"] = new coord(5097,5035);
_townpoints[1]["atma"] = new coord(5140,5055);
_townpoints[1]["warriv"] = new coord(5152,5201);

// act 3
_townpoints[2] = new Object();
_townpoints[2]["cain"] = new coord(5148,5066);
_townpoints[2]["waypoint"] = new coord(5158,5050);
_townpoints[2]["exit"] = new coord(5145,5044);
_townpoints[2]["alkor"] = new coord(5083,5016);
_townpoints[2]["asheara"] = new coord(5043,5093);
_townpoints[2]["ormus"] = new coord(5129,5093);
_townpoints[2]["hratli"] = new coord(5223,5048);
_townpoints[2]["stash"] = new coord(5144,5059);
_townpoints[2]["portalspot"] = new coord(5156,5063);
_townpoints[2]["meshif"] = new coord(5118,5168);

// act 4
_townpoints[3] = new Object();
_townpoints[3]["waypoint"] = new coord(5043,5018);
_townpoints[3]["cain"] = new coord(5027,5027);
_townpoints[3]["halbu"] = new coord(5089,5031);
_townpoints[3]["tyrael"] = new coord(5027,5027);
_townpoints[3]["jamella"] = new coord(5088,5054);
_townpoints[3]["stash"] = new coord(5022,5040);
_townpoints[3]["exit"] = new coord(5158,5086);
_townpoints[3]["portalspot"] = new coord(5049,5038);

// act 5
_townpoints[4] = new Object();
_townpoints[4]["portalspot"] = new coord(5097,5024);
_townpoints[4]["exit"] = new coord(5028,5095);
_townpoints[4]["stash"] = new coord(5129,5061);
_townpoints[4]["larzuk"] = new coord(5141,5045);
_townpoints[4]["malah"] = new coord(5078,5029);
_townpoints[4]["cain"] = new coord(5119,5061);
_townpoints[4]["qual-kehk"] = new coord(5066,5083);
_townpoints[4]["anya"] = new coord(5112,5120);
_townpoints[4]["portal"] = new coord(5118,5120);
_townpoints[4]["waypoint"] = new coord(5113,5068); 
_townpoints[4]["nihlathak"] = new coord(5071,5111);

function NTTM_TownMove(spot)
{
debugPrint("nttm townMove" );
	var _act;
	var _pos;

	if(arguments.length < 1 || !spot)
		return false;

	_act = me.act - 1;

	if(_act == 0)
	{
		if(!NTTM_CreateAct1Int())
			return false;
	}

	_pos = _townpoints[_act][spot];

	if(_pos.x == 0 && _pos.y == 0)
	{
		NTTM_TownFindSpotInt(_act, spot);

		if(_pos.x == 0 && _pos.y == 0)
			return false;
	}

	if(_pos && _pos.x != 0 && _pos.y != 0)
	{
		var _path = NTTM_FindTownPathInt(_act, _pos.x, _pos.y, 15);

		if(!_path)
			return false;

		return NTTM_FollowTownPathInt(_path);
	}
	
	return false;
}

function NTTM_TownMoveXY(x, y)
{
debugPrint("nttm townMoveXY" );
	var _act;
	var _path;

	_act = me.act - 1;

	if(_act == 0)
	{
		if(!NTTM_CreateAct1Int())
			return false;
	}

	_path = NTTM_FindTownPathInt(_act, x, y, 15);

	if(!_path)
		return false;

	return NTTM_FollowTownPathInt(_path);
}

function NTTM_CheckAct(act)
{
debugPrint("nttm checkAct" );
	var _townid;

	if(!NTC_InTown())
	{
		switch(me.act)
		{
		case 1:
			_townid = NTC_AREA_ID_ACT_1;
			break;
		case 2:
			_townid = NTC_AREA_ID_ACT_2;
			break;
		case 3:
			_townid = NTC_AREA_ID_ACT_3;
			break;
		case 4:
			_townid = NTC_AREA_ID_ACT_4;
			break;
		case 5:
			_townid = NTC_AREA_ID_ACT_5;
			break;
		}

		if(!NTM_MakeTP(_townid))
			return false;
	}

	if(arguments.length < 1)
		return true;

	if(act < 1 || act > 5)
		return false;

	if(act != me.act)
	{
		switch(act)
		{
		case 1:
			_townid = NTC_AREA_ID_ACT_1;
			break;
		case 2:
			_townid = NTC_AREA_ID_ACT_2;
			break;
		case 3:
			_townid = NTC_AREA_ID_ACT_3;
			break;
		case 4:
			_townid = NTC_AREA_ID_ACT_4;
			break;
		case 5:
			_townid = NTC_AREA_ID_ACT_5;
			break;
		}

		if(!NTTM_TownMove("waypoint"))
			return false;

		if(!NTM_UsePortal("Waypoint", _townid))
			return false;
	}

	return true;
}

// Internal function
function NTTM_CreateAct1Int()
{
debugPrint("nttm creatact1int" );
	var _fireobject;
	var _fire;

	if(_movepoints[0].length)
		return true;

	_fireobject = NTC_GetPresetUnits(NTC_UNIT_OBJECT, 39);

	if(!_fireobject)
		return false;

	_fire = new coord(_fireobject[0].roomx*5 + _fireobject[0].x, _fireobject[0].roomy*5 + _fireobject[0].y);

	_townpoints[0]["gheed"] = new coord(_fire.x-34, _fire.y+36);
	_townpoints[0]["charsi"] = new coord(_fire.x-39, _fire.y-25);
	_townpoints[0]["akara"] = new coord(_fire.x+56, _fire.y-30);
	_townpoints[0]["kashya"] = new coord(_fire.x+14, _fire.y-4);
	_townpoints[0]["cain"] = new coord(_fire.x+6, _fire.y-5);
	_townpoints[0]["warriv"] = new coord(_fire.x-5, _fire.y-2);
	_townpoints[0]["stash"] = new coord(_fire.x-7, _fire.y-12);
	_townpoints[0]["portalspot"] = new coord(_fire.x+10, _fire.y+18);
	_townpoints[0]["waypoint"] = new coord();
	_townpoints[0]["exit"] = new coord();

	var wp = NTC_GetUnit(NTC_UNIT_OBJECT, "Waypoint");

	if(wp)
		_townpoints[0]["waypoint"].set(wp.x, wp.y);
	else
	{
		var _wpobject = NTC_GetPresetUnits(NTC_UNIT_OBJECT, 119);

		if(_wpobject)
			_townpoints[0]["waypoint"].set(_wpobject[0].roomx*5 + _wpobject[0].x, _wpobject[0].roomy*5 + _wpobject[0].y);
		else
		{
			NTM_WalkTo(me.x, me.y-5);

			NTC_PingDelay(500);

			wp = NTC_GetUnit(NTC_UNIT_OBJECT, "Waypoint");

			if(wp)
				_townpoints[0]["waypoint"].set(wp.x, wp.y);
			else
				return false;
		}
	}

	_movepoints[0][0] = new coord();
	_movepoints[0][1] = new coord();
	_movepoints[0][2] = new coord(-4,-11);
	_movepoints[0][3] = new coord(-6,-22);
	_movepoints[0][4] = new coord(-16,-30);
	_movepoints[0][5] = new coord(-26,-26);
	_movepoints[0][6] = new coord(-34,-21);
	_movepoints[0][7] = new coord(-31,-11);
	_movepoints[0][8] = new coord(-21,-4);
	_movepoints[0][9] = new coord(-9,-6);
	_movepoints[0][10] = new coord(0,-17);
	_movepoints[0][11] = new coord(11,-15);
	_movepoints[0][12] = new coord(23,-13);
	_movepoints[0][13] = new coord(33,-16);
	_movepoints[0][14] = new coord(37,-27);
	_movepoints[0][15] = new coord(27,-31);
	_movepoints[0][16] = new coord(51,-28);
	_movepoints[0][17] = new coord(8,-5);
	_movepoints[0][18] = new coord(15,4);
	_movepoints[0][19] = new coord(15,15);
	_movepoints[0][20] = new coord(18,24);
	_movepoints[0][21] = new coord(27,32);
	_movepoints[0][22] = new coord(29,23);
	_movepoints[0][23] = new coord(28,9);
	_movepoints[0][24] = new coord(16,34);
	_movepoints[0][25] = new coord(5,35);
	_movepoints[0][26] = new coord(-1,22);
	_movepoints[0][27] = new coord(7,17);
	_movepoints[0][28] = new coord(-7,10);
	_movepoints[0][29] = new coord(-14,0);
	_movepoints[0][30] = new coord(-20,7);
	_movepoints[0][31] = new coord(-27,15);
	_movepoints[0][32] = new coord(-34,23);
	_movepoints[0][33] = new coord(-31,33);

	for(var i = 2 ; i < _movepoints[0].length ; i++)
	{
		_movepoints[0][i].x += _fire.x;
		_movepoints[0][i].y += _fire.y;
	}

	return true;
}

function NTTM_TownMoveToInt(c)
{
debugPrint("nttm townmovetoint" );
	if(NTTM_MoveToInt(c))
		return true;

	var oldpos = new coord(me);
	var pos = new coord(me);
	var dir = pos.dir(c);

	dir.rotate(90);
	pos.move(dir, 5);

	if(NTTM_MoveToInt(pos))
	{
		if(NTTM_MoveToInt(c))
			return true;

		NTTM_MoveToInt(oldpos);
	}

	dir.rotate(180);
	pos.set(oldpos);
	pos.move(dir, 5);

	NTTM_MoveToInt(pos);
	NTTM_MoveToInt(c);
return true;
}

function NTTM_MoveToInt(c)
{
debugPrint("nttm MovetoINT" );
return NTM_WalkTo(c.x,c.y)  //wtf do we have 2 walking functions
	var _mode;

	if(me.mode == 17)
		return true;	

	for(var i = 0 ; i < 50 ; i++)
	{
		_mode = me.mode;

		if(_mode != 2 && _mode != 3 && _mode != 6)
			NTC_DoClick(NTC_CLICK_LDOWN, NTC_SHIFT_NONE, c.x, c.y);

		NTC_Delay(NTC_DELAY_FRAME);

		if(c.dist(me) < 2)
			return true;
	}

	return false;
}

function NTTM_TownFindSpotInt(act, spot)
{
debugPrint("nttm findpotint" );
	if(act == 0)
	{
		if(spot == "waypoint")
		{
			var wp = NTC_GetUnit(NTC_UNIT_OBJECT, "Waypoint");

			if(wp)
			{
				_townpoints[0]["waypoint"].set(wp);

				return _townpoints[0]["waypoint"];
			}

			if(!NTTM_TownMove("stash"))
				return null;

			wp = NTC_GetUnit(NTC_UNIT_OBJECT, "Waypoint");

			if(wp)
			{
				_townpoints[0]["waypoint"].set(wp);

				return _townpoints[0]["waypoint"];
			}		
		}
		else if(spot == "exit")
		{
			if(!NTTM_TownMove("cain"))
				return null;

			var fire = NTC_GetUnit(NTC_UNIT_OBJECT, "fire");

			if(!fire)
				return null;

			var _roomAct1Town = getRoom(1);
			var _roomAct1BloodMoor = getRoom(2);

			if(_roomAct1Town && _roomAct1BloodMoor)
			{
				var x = _roomAct1Town.getStat(4) - _roomAct1BloodMoor.getStat(4);
				var y = _roomAct1Town.getStat(5) - _roomAct1BloodMoor.getStat(5);

				index = _movepoints[0].length - 1;

				// South Exit
				if(x < 0 && y < 0)
				{
					_DTM_Act1Exit = _DTM_Act1SouthExit;

					_townpoints[0]["exit"].set(fire.x+78, fire.y+1);
					_movepoints[0][index++] = new coord(fire.x+62, fire.y-28);
					_movepoints[0][index++] = new coord(fire.x+70, fire.y-20);
					_movepoints[0][index++] = new coord(fire.x+69, fire.y-9);

					return _townpoints[0]["exit"];
				}
				// North Exit
				else if(x > 0 && y < 0)
				{
					_DTM_Act1Exit = _DTM_Act1NorthExit;

					_townpoints[0]["exit"].set(fire.x-75, fire.y+4);
					_movepoints[0][index++] = new coord(fire.x-30, fire.y-6);
					_movepoints[0][index++] = new coord(fire.x-41, fire.y-5);
					_movepoints[0][index++] = new coord(fire.x-52, fire.y-8);
					_movepoints[0][index++] = new coord(fire.x-61, fire.y+1);

					return _townpoints[0]["exit"];
				}
				// West Exit
				else if(x == 0 && y < 0)
				{
					_DTM_Act1Exit = _DTM_Act1WestExit;

					_townpoints[0]["exit"].set(fire.x+15, fire.y+70);
					_movepoints[0][index++] = new coord(fire.x+27, fire.y+41);
					_movepoints[0][index++] = new coord(fire.x+26, fire.y+52);
					_movepoints[0][index++] = new coord(fire.x+19, fire.y+56);

					return _townpoints[0]["exit"];
				}
				// East Exit
				else if(x == 0 && y > 0)
				{
					_DTM_Act1Exit = _DTM_Act1EastExit;

					_townpoints[0]["exit"].set(fire.x+15, fire.y-55);
					_movepoints[0][index++] = new coord(fire.x+25, fire.y-40);
					_movepoints[0][index++] = new coord(fire.x+6, fire.y-43);
					_movepoints[0][index++] = new coord(fire.x-1, fire.y-37);
					_movepoints[0][index++] = new coord(fire.x+2, fire.y-26);

					return _townpoints[0]["exit"];
				}
			}
		}
	}
	else if(act == 1)
	{
		if(spot == "exit")
		{
			if(!NTTM_TownMoveXY(5098, 5053))
				return null;

			var obj = NTC_GetUnit(NTC_UNIT_OBJECT, "Dummy");

			if(obj)
			{
				do
				{
					if(obj.type == NTC_UNIT_OBJECT && obj.x == 5107 && obj.y == 5052)
						return _townpoints[1]["exit"].set(5096, 5009);
				} while(obj.getNext());
			}

			return _townpoints[1]["exit"].set(5011, 5066);
		}
	}

	return null;
}

function NTTM_FindTownPathInt(act, x, y, maxsep)
{
debugPrint("nttm FindTownPath" );
	var _path = NTTM_CreateDijkstraInt(act, x, y, maxsep);

	if(_path && _path.length)
		return _path;

	_path = NTTM_CreateDijkstraInt(act, x, y, maxsep+5);

	if(_path && _path.length)
		return _path;

	_path = NTTM_CreateDijkstraInt(act, x, y, maxsep+10);

	if(_path && _path.length)
		return _path;

	return null;
}

function NTTM_FollowTownPathInt(p)
{	
debugPrint("nttm followtownpathint" );
	var _fail = 0;

	for(var i = 0 ; i < p.length ; i++)
	{
		if(!NTTM_TownMoveToInt(p[i]))
			_fail++;

		if(_fail > 1)
			return false;
	}
	
	return true;
}

function NTTM_CreateDijkstraInt(act, targetx, targety, maxsep)
{
debugPrint("nttm creatdijkstraInt" );
	var i, j, d;
	var v = new Array;

	for(i = 0 ; i < _movepoints[act].length ; i++)
		v[i] = new NTTM_VertexInt();

	_movepoints[act][0] = new coord(me);
	_movepoints[act][1] = new coord(targetx, targety);
	
	for(i = 0 ; i < _movepoints[act].length ; i++)
	{
		for(j = 0 ; j < _movepoints[act].length ; j++)
		{
			if(i != j)
			{
				d = _movepoints[act][i].dist(_movepoints[act][j]);

				if(d <= maxsep)
					v[i].push(j, d);
			}
		}
	}

	NTTM_DijkstraInt(v, _movepoints[act].length);

	var path = new Array();
	if(!NTTM_CreateDijkstraPathInt(v, 0, 1, _movepoints[act], path))
		return null;

	return path;
}

function NTTM_VertexInt()
{
	this.NumAdjacencies = 0;
	this.Adjacent = new Array;
	this.AdjacencyWeight = new Array;
	this.Previous = 0;
	this.Cost = 0;
	this.push = NTTM_PushMethodInt;
}

function NTTM_PushMethodInt(neighbor, Cost)
{
	this.Adjacent[this.NumAdjacencies] = neighbor;
	this.AdjacencyWeight[this.NumAdjacencies] = Cost;
	this.NumAdjacencies++;
}

function NTTM_DijkstraInt(v, size)
{
	var i;
	var _INFINITY = 32767;
	var Cost = new Array;
	var done = new Array;
	var to_do = size;
	var iMin
	for(i = 0 ; i < size ; i++)
	{
		v[i].Cost = Cost[i] = _INFINITY;
		v[i].Previous = -1;
		done[i] = 0;
	}

	Cost[0] = 0;
	while(to_do)
	{
		for(i = 0 ; i < size ; i++)
		{
			if(!done[i])
			{
				iMin = i;
				break;
			}
		}

		for(i = iMin+1 ; i < size ; i++)
		{
			if(!done[i] && Cost[i] < Cost[iMin])
				iMin = i;
		}

		done[iMin] = 1;
		to_do--;

		for(i = 0 ; i < v[iMin].NumAdjacencies ; i++)
		{
			if(Cost[iMin]+v[iMin].AdjacencyWeight[i] < Cost[v[iMin].Adjacent[i]])
			{
				v[v[iMin].Adjacent[i]].Previous = iMin;
				v[v[iMin].Adjacent[i]].Cost = Cost[v[iMin].Adjacent[i]] = Cost[iMin] + v[iMin].AdjacencyWeight[i];
			}
		}
	}
}

function NTTM_CreateDijkstraPathInt(v, source, dest, points, path)
{
	if(source == dest)
	{
		var index = path.length;
		path[index] = new coord(points[dest]);
		path[index].data = points[dest].data;
	}
	else
	{
		if(v[dest].Previous != -1)
		{
			NTTM_CreateDijkstraPathInt(v, source, v[dest].Previous, points, path);
			index = path.length;
			path[index] = new coord(points[dest]);
			path[index].data = points[dest].data;
		}
		else
			return false;
	}

	return true;
}


/**
*	@name		NTTM_LeadNPC()
*
*	@args		npc				:	Required; Object; 	Unit object which is a reference to any of the town NPCs.
*				destination		:	Required; Object; 	Unit object or JS object which has an 'x', 'y', and optional 'area' property
*				nodedistance	:	Optional; Number; 	Sets the distance between each movement along the generated path.  (Default is 8 yards)
*				waitdistance	:	Optional; Number; 	Sets the distance from the npc to wait for until moving to the next path point (Default is 4 yards)
*				delaytime		:	Optional; Number; 	Sets the time to wait between moving to path nodes and calling moveNPC() again.  (Default is 8 seconds)
*				retries			:	Optional; Number; 	Sets the number of times to retry leading the npc
*				enddistance		:	Optional; Number;	Sets the distance threshold from the destination at which to end leading the npc
*
*	@desc		Can only be used by people that have modified the D2BS core to include a function called moveNPC()
*				Will generate a path between npc and destination coordinates, moving to every point in the path and
*				calling moveNPC() on the npc Unit to move the npc along the generated path, step by step.
* 
*	@see		http://www.assembla.com/spaces/d2bs/wiki/Adding_Custom_D2bs_Function
*
*	@example	https://www.assembla.com/spaces/d2bs/documents/bxh-yqDXSr4lSCeJe5cbCb/download/bxh-yqDXSr4lSCeJe5cbCb
*/
function NTTM_LeadNPC(npc, destination, nodedistance, waitdistance, waitdelay, retries, enddistance)
{
	// Check for moveNPC() D2BS core modification;
	if(!moveNPC.isFunction)
	{
		print('�c1NTTM_LeadNPC() Error: You\'re D2BS '+ version() +' does not have a moveNPC() function');
		return false;
	}
	
	// Handle argument validation;
	if(arguments.length < 2)
	{
		print('�c1NTTM_LeadNPC() Error: Function requires at least the first two required arguments');
		return false;
	}
	
	if(!npc.isD2BSUnit && !(destination.isD2BSUnit || (destination.isObject && destination.x && destination.y)))
	{
		print('�c1NTTM_LeadNPC() Error: Invalid \'npc\' or \'destination\' object provided, or object is now out of range');
		return false;
	}
	
	if(nodedistance == undefined || !nodedistance.isNumber || (nodedistance < 1))
		nodedistance = 8;
	
	if(waitdistance == undefined || !waitdistance.isNumber || (waitdistance < 1))
		waitdistance = 4;
	
	if(waitdelay == undefined)
		waitdelay = 8000;
		
	if(enddistance == undefined)
		enddistance = waitdistance;
	
	// Store destination area, and x/y coords;
	var dest = {};
	dest.area = (destination.area) ? destination.area : me.area;
	dest.x = destination.x;
	dest.y = destination.y;
	
	// Declare initial path var to set baseline number for retries if not provided;
	var path = getPath([me.area, dest.area], me.x, me.y, dest.x, dest.y, false, nodedistance, false);
	if(retries == undefined)
		retries = Math.ceil(path.length * 1.75);
	
	// Make new counter object;
	var counter = {};
	counter.retries = 0;
	
	// Debugging information;
	debugPrint('NTTM_LeadNPC()\nnpc: '+ npc.name +'\ndest.x:'+ dest.x +'\ndest.y:'+ dest.y +'\nenddistance: '+ 
			enddistance +'\ndistance > enddistance --->'+ (getDistance(npc, dest.x, dest.y) > enddistance));
	
	while(getDistance(npc, dest.x, dest.y) > enddistance)
	{
		// Move closer to npc object;
		NTM_GetCloserInt(npc);
		NTC_Delay(1000);
		
		// Call moveNPC() in case npc is stuck on an object;
		moveNPC(npc, me.x, me.y);
		
		// Wait timer after calling moveNPC();
		NTC_Delay(waitdelay);
		
		// Generate updated path from npc to destination;
		path = undefined;
		path = getPath([me.area, dest.area], me.x, me.y, dest.x, dest.y, false, nodedistance, false);
		
		// Debugging information;
		debugPrint(getTickCount() + ': Path coords: '+ path.toSource());
		
		// If path is invalid, return false;
		if(path == undefined || !path)
		{
			print('�c1NTTM_LeadNPC() Error: Path failed to generate');
			return false;
		}
		else
		{
			// Move to next coord in updated path;
			var nextindex;
			
			if(path.length > nodedistance)
				nextindex = nodedistance;
			else
				nextindex = path.length - 1;

			var nextx = path[nextindex].x;
			var nexty = path[nextindex].y;
		
			print('Movement #'+ (counter.retries + 1) +', next map coordinate ('+ nextx +', '+ nexty +')'); 
			if(!clickMap(0, 0, nextx, nexty))
			{
				print('�c1NTTM_LeadNPC() Error: Failed to move to path point ('+ nextx +', '+ nexty +')');
				return false;
			}
		}
		
		// Loop to move npc closer if still too far away
		counter.moveNPC = 0;
		while(getDistance(me, npc) > waitdistance)
		{
			moveNPC(npc, me.x, me.y);
			
			print('Waiting for '+ npc.name +' to get closer before continuing ('+ counter.moveNPC +')');
			NTC_Delay(waitdelay);
			
			// After called moveNPC() 2 times, break loop (npc Unit could be stuck on something)
			counter.moveNPC++;
			if(counter.moveNPC >= 2)
				break;
		}
		
		// Increment counter.retries;
		counter.retries++;
		if(counter.retries >= retries)
		{
			print('NTTM_LeadNPC() Ending function, maximum retries have been met. ('+ counter.retries +')');
			break;
		}
	}
	
	return true;
}

