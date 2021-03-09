import { TEAMS as t } from "@/static/lfl/teams";

export const weeks = [
//Week 8
	{
		number: 8,
		day: 1,
		displayed: true,
		matchs: [
			{ id: 811, team_blue: t.SOLARY, team_red: t.TEAM_MCES, winner: null },
			{ id: 812, team_blue: t.KARMINE_CORP, team_red: t.IZI_DREAM, winner: null },
			{ id: 813, team_blue: t.MISFITS_PREMIER, team_red: t.VITALITY_BEE, winner: null },
			{ id: 814, team_blue: t.GAMERSORIGIN, team_red: t.GAMEWARD, winner: null },
			{ id: 815, team_blue: t.TEAM_BDS, team_red: t.TEAM_LDLC, winner: null },
		],
	},
	{
		number: 8,
		day: 2,
		displayed: true,
		matchs: [
			{ id: 821, team_blue: t.SOLARY, team_red: t.TEAM_LDLC, winner: null },
			{ id: 822, team_blue: t.TEAM_MCES, team_red: t.GAMEWARD, winner: null },
			{ id: 823, team_blue: t.TEAM_BDS, team_red: t.KARMINE_CORP, winner: null },
			{ id: 824, team_blue: t.GAMERSORIGIN, team_red: t.VITALITY_BEE, winner: null },
			{ id: 825, team_blue: t.MISFITS_PREMIER, team_red: t.IZI_DREAM, winner: null },
		],
	},
	{
		number: 8,
		day: 3,
		displayed: true,
		matchs: [
			{ id: 831, team_blue: t.GAMERSORIGIN, team_red: t.IZI_DREAM, winner: null },
			{ id: 832, team_blue: t.TEAM_LDLC, team_red: t.VITALITY_BEE, winner: null },
			{ id: 833, team_blue: t.GAMEWARD, team_red: t.KARMINE_CORP, winner: null },
			{ id: 834, team_blue: t.SOLARY, team_red: t.TEAM_BDS, winner: null },
			{ id: 835, team_blue: t.TEAM_MCES, team_red: t.MISFITS_PREMIER, winner: null },
		],
	},
	//Week 7
	{
		number: 7,
		day: 1,
		displayed: false,
		matchs: [
			{ id: 711, team_blue: t.TEAM_LDLC, team_red: t.IZI_DREAM, winner: t.TEAM_LDLC },
			{ id: 712, team_blue: t.KARMINE_CORP, team_red: t.TEAM_MCES, winner: t.KARMINE_CORP },
			{ id: 713, team_blue: t.MISFITS_PREMIER, team_red: t.SOLARY, winner: t.MISFITS_PREMIER },
			{ id: 714, team_blue: t.VITALITY_BEE, team_red: t.GAMEWARD, winner: t.GAMEWARD },
			{ id: 715, team_blue: t.TEAM_BDS, team_red: t.GAMERSORIGIN, winner: t.TEAM_BDS },
		],
	},
	{
		number: 7,
		day: 2,
		displayed: false,
		matchs: [
			{ id: 721, team_blue: t.VITALITY_BEE, team_red: t.IZI_DREAM, winner: t.VITALITY_BEE },
			{ id: 722, team_blue: t.MISFITS_PREMIER, team_red: t.GAMEWARD, winner: t.MISFITS_PREMIER },
			{ id: 723, team_blue: t.KARMINE_CORP, team_red: t.TEAM_LDLC, winner: t.KARMINE_CORP },
			{ id: 724, team_blue: t.GAMERSORIGIN, team_red: t.SOLARY, winner: t.GAMERSORIGIN },
			{ id: 725, team_blue: t.TEAM_BDS, team_red: t.TEAM_MCES, winner: t.TEAM_BDS },
		],
	},
	//Week 6
	{
		number: 6,
		day: 1,
		displayed: false,
		matchs: [
			{ id: 611, team_blue: t.TEAM_MCES, team_red: t.IZI_DREAM, winner: t.TEAM_MCES },
			{ id: 612, team_blue: t.GAMEWARD, team_red: t.SOLARY, winner: t.SOLARY },
			{ id: 613, team_blue: t.VITALITY_BEE, team_red: t.TEAM_BDS, winner: t.VITALITY_BEE },
			{ id: 614, team_blue: t.KARMINE_CORP, team_red: t.MISFITS_PREMIER, winner: t.KARMINE_CORP },
			{ id: 615, team_blue: t.TEAM_LDLC, team_red: t.GAMERSORIGIN, winner: t.TEAM_LDLC },
		],
	},
	{
		number: 6,
		day: 2,
		displayed: false,
		matchs: [
			{ id: 621, team_blue: t.GAMEWARD, team_red: t.IZI_DREAM, winner: t.GAMEWARD },
			{ id: 622, team_blue: t.VITALITY_BEE, team_red: t.SOLARY, winner: t.SOLARY },
			{ id: 623, team_blue: t.KARMINE_CORP, team_red: t.GAMERSORIGIN, winner: t.KARMINE_CORP },
			{ id: 624, team_blue: t.MISFITS_PREMIER, team_red: t.TEAM_BDS, winner: t.TEAM_BDS },
			{ id: 625, team_blue: t.TEAM_LDLC, team_red: t.TEAM_MCES, winner: t.TEAM_MCES },
		],
	},
	//Week 5
	{
		number: 5,
		day: 1,
		displayed: false,
		matchs: [
			{ id: 511, team_blue: t.TEAM_MCES, team_red: t.GAMERSORIGIN, winner: t.GAMERSORIGIN },
			{ id: 512, team_blue: t.SOLARY, team_red: t.IZI_DREAM, winner: t.SOLARY },
			{ id: 513, team_blue: t.VITALITY_BEE, team_red: t.KARMINE_CORP, winner: t.KARMINE_CORP },
			{ id: 514, team_blue: t.GAMEWARD, team_red: t.TEAM_BDS, winner: t.GAMEWARD },
			{ id: 515, team_blue: t.TEAM_LDLC, team_red: t.MISFITS_PREMIER, winner: t.MISFITS_PREMIER },
		],
	},
	{
		number: 5,
		day: 2,
		displayed: false,
		matchs: [
			{ id: 521, team_blue: t.TEAM_MCES, team_red: t.VITALITY_BEE, winner: t.VITALITY_BEE },
			{ id: 522, team_blue: t.GAMERSORIGIN, team_red: t.MISFITS_PREMIER, winner: t.MISFITS_PREMIER },
			{ id: 523, team_blue: t.TEAM_BDS, team_red: t.IZI_DREAM, winner: t.TEAM_BDS },
			{ id: 524, team_blue: t.SOLARY, team_red: t.KARMINE_CORP, winner: t.SOLARY },
			{ id: 525, team_blue: t.GAMEWARD, team_red: t.TEAM_LDLC, winner: t.GAMEWARD },
		],
	},
	//Week 4
	{
		number: 4,
		day: 1,
		displayed: false,
		matchs: [
			{ id: 411, team_blue: t.IZI_DREAM, team_red: t.MISFITS_PREMIER, winner: t.IZI_DREAM },
			{ id: 412, team_blue: t.VITALITY_BEE, team_red: t.GAMERSORIGIN, winner: t.VITALITY_BEE },
			{ id: 413, team_blue: t.KARMINE_CORP, team_red: t.TEAM_BDS, winner: t.TEAM_BDS },
			{ id: 414, team_blue: t.TEAM_LDLC, team_red: t.SOLARY, winner: t.SOLARY },
			{ id: 415, team_blue: t.GAMEWARD, team_red: t.TEAM_MCES, winner: t.GAMEWARD },
		],
	},
	{
		number: 4,
		day: 2,
		displayed: false,
		matchs: [
			{ id: 421, team_blue: t.VITALITY_BEE, team_red: t.TEAM_LDLC, winner: t.VITALITY_BEE },
			{ id: 422, team_blue: t.IZI_DREAM, team_red: t.GAMERSORIGIN, winner: t.GAMERSORIGIN },
			{ id: 423, team_blue: t.KARMINE_CORP, team_red: t.GAMEWARD, winner: t.KARMINE_CORP },
			{ id: 424, team_blue: t.TEAM_BDS, team_red: t.SOLARY, winner: t.TEAM_BDS },
			{ id: 425, team_blue: t.MISFITS_PREMIER, team_red: t.TEAM_MCES, winner: t.MISFITS_PREMIER },
		],
	},
	//Week 3
	{
		number: 3,
		day: 1,
		displayed: false,
		matchs: [
			{ id: 311, team_blue: t.TEAM_MCES, team_red: t.TEAM_BDS, winner: t.TEAM_BDS },
			{ id: 312, team_blue: t.SOLARY, team_red: t.GAMERSORIGIN, winner: t.GAMERSORIGIN },
			{ id: 313, team_blue: t.TEAM_LDLC, team_red: t.KARMINE_CORP, winner: t.KARMINE_CORP },
			{ id: 314, team_blue: t.GAMEWARD, team_red: t.MISFITS_PREMIER, winner: t.GAMEWARD },
			{ id: 315, team_blue: t.IZI_DREAM, team_red: t.VITALITY_BEE, winner: t.IZI_DREAM },
		],
	},
	{
		number: 3,
		day: 2,
		displayed: false,
		matchs: [
			{ id: 321, team_blue: t.GAMEWARD, team_red: t.GAMERSORIGIN, winner: t.GAMEWARD },
			{ id: 322, team_blue: t.IZI_DREAM, team_red: t.KARMINE_CORP, winner: t.KARMINE_CORP },
			{ id: 323, team_blue: t.VITALITY_BEE, team_red: t.MISFITS_PREMIER, winner: t.VITALITY_BEE },
			{ id: 324, team_blue: t.TEAM_LDLC, team_red: t.TEAM_BDS, winner: t.TEAM_BDS },
			{ id: 325, team_blue: t.TEAM_MCES, team_red: t.SOLARY, winner: t.SOLARY },
		],
	},
	//Week 2
	{
		number: 2,
		day: 1,
		displayed: false,
		matchs: [
			{ id: 211, team_blue: t.TEAM_MCES, team_red: t.TEAM_LDLC, winner: t.TEAM_MCES },
			{ id: 212, team_blue: t.IZI_DREAM, team_red: t.GAMEWARD, winner: t.GAMEWARD },
			{ id: 213, team_blue: t.SOLARY, team_red: t.VITALITY_BEE, winner: t.VITALITY_BEE },
			{ id: 214, team_blue: t.GAMERSORIGIN, team_red: t.KARMINE_CORP, winner: t.GAMERSORIGIN },
			{ id: 215, team_blue: t.TEAM_BDS, team_red: t.MISFITS_PREMIER, winner: t.MISFITS_PREMIER },
		],
	},
	{
		number: 2,
		day: 2,
		displayed: false,
		matchs: [
			{ id: 221, team_blue: t.GAMEWARD, team_red: t.VITALITY_BEE, winner: t.VITALITY_BEE },
			{ id: 222, team_blue: t.TEAM_MCES, team_red: t.KARMINE_CORP, winner: t.KARMINE_CORP },
			{ id: 223, team_blue: t.SOLARY, team_red: t.MISFITS_PREMIER, winner: t.MISFITS_PREMIER },
			{ id: 224, team_blue: t.IZI_DREAM, team_red: t.TEAM_LDLC, winner: t.TEAM_LDLC },
			{ id: 225, team_blue: t.GAMERSORIGIN, team_red: t.TEAM_BDS, winner: t.TEAM_BDS },
		],
	},
	//Week 1
	{
		number: 1,
		day: 1,
		displayed: false,
		matchs: [
			{ id: 111, team_blue: t.MISFITS_PREMIER, team_red: t.TEAM_LDLC, winner: t.MISFITS_PREMIER },
			{ id: 112, team_blue: t.KARMINE_CORP, team_red: t.VITALITY_BEE, winner: t.KARMINE_CORP },
			{ id: 113, team_blue: t.IZI_DREAM, team_red: t.SOLARY, winner: t.SOLARY },
			{ id: 114, team_blue: t.GAMERSORIGIN, team_red: t.TEAM_MCES, winner: t.GAMERSORIGIN },
			{ id: 115, team_blue: t.TEAM_BDS, team_red: t.GAMEWARD, winner: t.TEAM_BDS },
		],
	},
	{
		number: 1,
		day: 2,
		displayed: false,
		matchs: [
			{ id: 121, team_blue: t.SOLARY, team_red: t.GAMEWARD, winner: t.GAMEWARD },
			{ id: 122, team_blue: t.TEAM_BDS, team_red: t.VITALITY_BEE, winner: t.TEAM_BDS },
			{ id: 123, team_blue: t.MISFITS_PREMIER, team_red: t.KARMINE_CORP, winner: t.MISFITS_PREMIER },
			{ id: 124, team_blue: t.GAMERSORIGIN, team_red: t.TEAM_LDLC, winner: t.GAMERSORIGIN },
			{ id: 125, team_blue: t.IZI_DREAM, team_red: t.TEAM_MCES, winner: t.IZI_DREAM },
		],
	},
	{
		number: 1,
		day: 3,
		displayed: false,
		matchs: [
			{ id: 131, team_blue: t.MISFITS_PREMIER, team_red: t.GAMERSORIGIN, winner: t.MISFITS_PREMIER },
			{ id: 132, team_blue: t.IZI_DREAM, team_red: t.TEAM_BDS, winner: t.IZI_DREAM },
			{ id: 133, team_blue: t.KARMINE_CORP, team_red: t.SOLARY, winner: t.KARMINE_CORP },
			{ id: 134, team_blue: t.TEAM_LDLC, team_red: t.GAMEWARD, winner: t.TEAM_LDLC },
			{ id: 135, team_blue: t.VITALITY_BEE, team_red: t.TEAM_MCES, winner: t.VITALITY_BEE },
		],
	},
];
