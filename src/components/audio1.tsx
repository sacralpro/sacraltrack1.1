import type { NextPage } from "next";
import { memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type Audio1Type = {
  /** Style props */
  audioWidth?: Property.Width;
  audioHeight?: Property.Height;
  rectangleDivBorderRadius?: Property.BorderRadius;
  rectangleDivBorderRadius1?: Property.BorderRadius;
  rectangleDivBorderRadius2?: Property.BorderRadius;
  rectangleDivBorderRadius3?: Property.BorderRadius;
  rectangleDivBorderRadius4?: Property.BorderRadius;
  rectangleDivBorderRadius5?: Property.BorderRadius;
  rectangleDivBorderRadius6?: Property.BorderRadius;
  rectangleDivBorderRadius7?: Property.BorderRadius;
  rectangleDivBorderRadius8?: Property.BorderRadius;
  rectangleDivBorderRadius9?: Property.BorderRadius;
  rectangleDivBorderRadius10?: Property.BorderRadius;
  rectangleDivBorderRadius11?: Property.BorderRadius;
  rectangleDivBorderRadius12?: Property.BorderRadius;
  rectangleDivBorderRadius13?: Property.BorderRadius;
  rectangleDivBorderRadius14?: Property.BorderRadius;
  rectangleDivBorderRadius15?: Property.BorderRadius;
  rectangleDivBorderRadius16?: Property.BorderRadius;
  rectangleDivBorderRadius17?: Property.BorderRadius;
  rectangleDivBorderRadius18?: Property.BorderRadius;
  rectangleDivBorderRadius19?: Property.BorderRadius;
  rectangleDivBorderRadius20?: Property.BorderRadius;
  rectangleDivBorderRadius21?: Property.BorderRadius;
  rectangleDivBorderRadius22?: Property.BorderRadius;
  rectangleDivBorderRadius23?: Property.BorderRadius;
  rectangleDivBorderRadius24?: Property.BorderRadius;
  rectangleDivBorderRadius25?: Property.BorderRadius;
  rectangleDivBorderRadius26?: Property.BorderRadius;
  rectangleDivBorderRadius27?: Property.BorderRadius;
  rectangleDivBorderRadius28?: Property.BorderRadius;
  rectangleDivBorderRadius29?: Property.BorderRadius;
  rectangleDivBorderRadius30?: Property.BorderRadius;
  rectangleDivBorderRadius31?: Property.BorderRadius;
  rectangleDivBorderRadius32?: Property.BorderRadius;
  rectangleDivBorderRadius33?: Property.BorderRadius;
  rectangleDivBorderRadius34?: Property.BorderRadius;
  rectangleDivBorderRadius35?: Property.BorderRadius;
  rectangleDivBorderRadius36?: Property.BorderRadius;
  rectangleDivBorder?: Property.Border;
  rectangleDivBackgroundColor?: Property.BackgroundColor;
  rectangleDivBorderRadius37?: Property.BorderRadius;
  rectangleDivBorderRadius38?: Property.BorderRadius;
  rectangleDivBorderRadius39?: Property.BorderRadius;
  rectangleDivBorderRadius40?: Property.BorderRadius;
  rectangleDivBorderRadius41?: Property.BorderRadius;
  rectangleDivBorderRadius42?: Property.BorderRadius;
  rectangleDivBorderRadius43?: Property.BorderRadius;
  rectangleDivBorderRadius44?: Property.BorderRadius;
  rectangleDivBorderRadius45?: Property.BorderRadius;
  rectangleDivBorderRadius46?: Property.BorderRadius;
  rectangleDivBorderRadius47?: Property.BorderRadius;
  rectangleDivBorderRadius48?: Property.BorderRadius;
  rectangleDivBorderRadius49?: Property.BorderRadius;
  rectangleDivBorderRadius50?: Property.BorderRadius;
  rectangleDivBorderRadius51?: Property.BorderRadius;
  rectangleDivBorderRadius52?: Property.BorderRadius;
  rectangleDivBorderRadius53?: Property.BorderRadius;
  rectangleDivBorderRadius54?: Property.BorderRadius;
  rectangleDivBorderRadius55?: Property.BorderRadius;
  rectangleDivBorderRadius56?: Property.BorderRadius;
  rectangleDivBorderRadius57?: Property.BorderRadius;
  rectangleDivLeft?: Property.Left;
  rectangleDivBorderRadius58?: Property.BorderRadius;
  rectangleDivBorderRadius59?: Property.BorderRadius;
  rectangleDivBorderRadius60?: Property.BorderRadius;
  rectangleDivTop?: Property.Top;
  rectangleDivBorderRadius61?: Property.BorderRadius;
  rectangleDivTop1?: Property.Top;
  rectangleDivBorderRadius62?: Property.BorderRadius;
  rectangleDivBorderRadius63?: Property.BorderRadius;
  rectangleDivBorderRadius64?: Property.BorderRadius;
  rectangleDivBorderRadius65?: Property.BorderRadius;
  rectangleDivBorderRadius66?: Property.BorderRadius;
  rectangleDivBottom?: Property.Bottom;
  rectangleDivBorderRadius67?: Property.BorderRadius;
  rectangleDivBottom1?: Property.Bottom;
  rectangleDivBorderRadius68?: Property.BorderRadius;
  rectangleDivBorderRadius69?: Property.BorderRadius;
  rectangleDivBorderRadius70?: Property.BorderRadius;
  rectangleDivTop2?: Property.Top;
  rectangleDivBorderRadius71?: Property.BorderRadius;
  rectangleDivTop3?: Property.Top;
  rectangleDivBorderRadius72?: Property.BorderRadius;
  rectangleDivBorderRadius73?: Property.BorderRadius;
  rectangleDivBorderRadius74?: Property.BorderRadius;
  rectangleDivBorderRadius75?: Property.BorderRadius;
  rectangleDivBorderRadius76?: Property.BorderRadius;
  rectangleDivBottom2?: Property.Bottom;
  rectangleDivRight?: Property.Right;
  rectangleDivBorderRadius77?: Property.BorderRadius;
  rectangleDivBottom3?: Property.Bottom;
  rectangleDivBorderRadius78?: Property.BorderRadius;
  rectangleDivLeft1?: Property.Left;
  rectangleDivBorderRadius79?: Property.BorderRadius;
  rectangleDivBorderRadius80?: Property.BorderRadius;
  rectangleDivTop4?: Property.Top;
  rectangleDivBorderRadius81?: Property.BorderRadius;
  rectangleDivTop5?: Property.Top;
  rectangleDivBorderRadius82?: Property.BorderRadius;
  rectangleDivBorderRadius83?: Property.BorderRadius;
  rectangleDivBorderRadius84?: Property.BorderRadius;
  rectangleDivBorderRadius85?: Property.BorderRadius;
  rectangleDivBorderRadius86?: Property.BorderRadius;
  rectangleDivBottom4?: Property.Bottom;
  rectangleDivRight1?: Property.Right;
  rectangleDivBorderRadius87?: Property.BorderRadius;
  rectangleDivBottom5?: Property.Bottom;
  rectangleDivBorderRadius88?: Property.BorderRadius;
  rectangleDivLeft2?: Property.Left;
  rectangleDivBorderRadius89?: Property.BorderRadius;
  rectangleDivBorderRadius90?: Property.BorderRadius;
  rectangleDivBorderRadius91?: Property.BorderRadius;
  rectangleDivBorderRadius92?: Property.BorderRadius;
  rectangleDivBorderRadius93?: Property.BorderRadius;
  rectangleDivBorderRadius94?: Property.BorderRadius;
  rectangleDivBorderRadius95?: Property.BorderRadius;
  rectangleDivBorderRadius96?: Property.BorderRadius;
  rectangleDivBorderRadius97?: Property.BorderRadius;
  rectangleDivBorderRadius98?: Property.BorderRadius;
  rectangleDivBorderRadius99?: Property.BorderRadius;
  rectangleDivBorderRadius100?: Property.BorderRadius;
  rectangleDivBorderRadius101?: Property.BorderRadius;
  rectangleDivBorderRadius102?: Property.BorderRadius;
  rectangleDivBorderRadius103?: Property.BorderRadius;
  rectangleDivBorderRadius104?: Property.BorderRadius;
  rectangleDivBorderRadius105?: Property.BorderRadius;
  rectangleDivBorderRadius106?: Property.BorderRadius;
  rectangleDivBorderRadius107?: Property.BorderRadius;
  rectangleDivBorderRadius108?: Property.BorderRadius;
  rectangleDivBorderRadius109?: Property.BorderRadius;
  rectangleDivBorderRadius110?: Property.BorderRadius;
  rectangleDivBorderRadius111?: Property.BorderRadius;
  rectangleDivBorderRadius112?: Property.BorderRadius;
  rectangleDivBorderRadius113?: Property.BorderRadius;
  rectangleDivBorderRadius114?: Property.BorderRadius;
  rectangleDivBorderRadius115?: Property.BorderRadius;
  rectangleDivBorderRadius116?: Property.BorderRadius;
  rectangleDivBorderRadius117?: Property.BorderRadius;
  rectangleDivLeft3?: Property.Left;
  rectangleDivBorderRadius118?: Property.BorderRadius;
  rectangleDivBorderRadius119?: Property.BorderRadius;
  rectangleDivBorderRadius120?: Property.BorderRadius;
  rectangleDivBorderRadius121?: Property.BorderRadius;
  rectangleDivBorderRadius122?: Property.BorderRadius;
  rectangleDivBorderRadius123?: Property.BorderRadius;
  rectangleDivRight2?: Property.Right;
  rectangleDivBorderRadius124?: Property.BorderRadius;
  rectangleDivBorderRadius125?: Property.BorderRadius;
  rectangleDivBorderRadius126?: Property.BorderRadius;
  rectangleDivBorderRadius127?: Property.BorderRadius;
  rectangleDivLeft4?: Property.Left;
  rectangleDivBorderRadius128?: Property.BorderRadius;
  rectangleDivBorderRadius129?: Property.BorderRadius;
  rectangleDivBorderRadius130?: Property.BorderRadius;
  rectangleDivBorderRadius131?: Property.BorderRadius;
  rectangleDivBorderRadius132?: Property.BorderRadius;
  rectangleDivBorderRadius133?: Property.BorderRadius;
  rectangleDivBorderRadius134?: Property.BorderRadius;
  rectangleDivBorderRadius135?: Property.BorderRadius;
  rectangleDivBorderRadius136?: Property.BorderRadius;
  rectangleDivBorderRadius137?: Property.BorderRadius;
  rectangleDivLeft5?: Property.Left;
  rectangleDivBorderRadius138?: Property.BorderRadius;
  rectangleDivBorderRadius139?: Property.BorderRadius;
  rectangleDivBorderRadius140?: Property.BorderRadius;
  rectangleDivBorderRadius141?: Property.BorderRadius;
  rectangleDivBorderRadius142?: Property.BorderRadius;
  rectangleDivBorderRadius143?: Property.BorderRadius;
  rectangleDivBorderRadius144?: Property.BorderRadius;
  rectangleDivBorderRadius145?: Property.BorderRadius;
  rectangleDivBorderRadius146?: Property.BorderRadius;
  rectangleDivBorderRadius147?: Property.BorderRadius;
  rectangleDivBorderRadius148?: Property.BorderRadius;
  rectangleDivBorderRadius149?: Property.BorderRadius;
  rectangleDivBorderRadius150?: Property.BorderRadius;
  rectangleDivBorderRadius151?: Property.BorderRadius;
  rectangleDivBorder1?: Property.Border;
  rectangleDivBackgroundColor1?: Property.BackgroundColor;
  rectangleDivBorderRadius152?: Property.BorderRadius;
  rectangleDivBorderRadius153?: Property.BorderRadius;
  rectangleDivRight3?: Property.Right;
  rectangleDivBorderRadius154?: Property.BorderRadius;
  rectangleDivBorderRadius155?: Property.BorderRadius;
  rectangleDivBorderRadius156?: Property.BorderRadius;
  rectangleDivBorderRadius157?: Property.BorderRadius;
  rectangleDivLeft6?: Property.Left;
  rectangleDivBorderRadius158?: Property.BorderRadius;
  rectangleDivBorderRadius159?: Property.BorderRadius;
  rectangleDivBorderRadius160?: Property.BorderRadius;
  rectangleDivBorder2?: Property.Border;
  rectangleDivBackgroundColor2?: Property.BackgroundColor;
  rectangleDivBorderRadius161?: Property.BorderRadius;
  rectangleDivBorderRadius162?: Property.BorderRadius;
  rectangleDivBorder3?: Property.Border;
  rectangleDivBackgroundColor3?: Property.BackgroundColor;
  rectangleDivBorderRadius163?: Property.BorderRadius;
  rectangleDivBorderRadius164?: Property.BorderRadius;
  rectangleDivBorderRadius165?: Property.BorderRadius;
  rectangleDivBorderRadius166?: Property.BorderRadius;
  rectangleDivBorderRadius167?: Property.BorderRadius;
  rectangleDivBorderRadius168?: Property.BorderRadius;
  rectangleDivLeft7?: Property.Left;
  rectangleDivBorderRadius169?: Property.BorderRadius;
};

const Audio1: NextPage<Audio1Type> = memo(
  ({
    audioWidth,
    audioHeight,
    rectangleDivBorderRadius,
    rectangleDivBorderRadius1,
    rectangleDivBorderRadius2,
    rectangleDivBorderRadius3,
    rectangleDivBorderRadius4,
    rectangleDivBorderRadius5,
    rectangleDivBorderRadius6,
    rectangleDivBorderRadius7,
    rectangleDivBorderRadius8,
    rectangleDivBorderRadius9,
    rectangleDivBorderRadius10,
    rectangleDivBorderRadius11,
    rectangleDivBorderRadius12,
    rectangleDivBorderRadius13,
    rectangleDivBorderRadius14,
    rectangleDivBorderRadius15,
    rectangleDivBorderRadius16,
    rectangleDivBorderRadius17,
    rectangleDivBorderRadius18,
    rectangleDivBorderRadius19,
    rectangleDivBorderRadius20,
    rectangleDivBorderRadius21,
    rectangleDivBorderRadius22,
    rectangleDivBorderRadius23,
    rectangleDivBorderRadius24,
    rectangleDivBorderRadius25,
    rectangleDivBorderRadius26,
    rectangleDivBorderRadius27,
    rectangleDivBorderRadius28,
    rectangleDivBorderRadius29,
    rectangleDivBorderRadius30,
    rectangleDivBorderRadius31,
    rectangleDivBorderRadius32,
    rectangleDivBorderRadius33,
    rectangleDivBorderRadius34,
    rectangleDivBorderRadius35,
    rectangleDivBorderRadius36,
    rectangleDivBorder,
    rectangleDivBackgroundColor,
    rectangleDivBorderRadius37,
    rectangleDivBorderRadius38,
    rectangleDivBorderRadius39,
    rectangleDivBorderRadius40,
    rectangleDivBorderRadius41,
    rectangleDivBorderRadius42,
    rectangleDivBorderRadius43,
    rectangleDivBorderRadius44,
    rectangleDivBorderRadius45,
    rectangleDivBorderRadius46,
    rectangleDivBorderRadius47,
    rectangleDivBorderRadius48,
    rectangleDivBorderRadius49,
    rectangleDivBorderRadius50,
    rectangleDivBorderRadius51,
    rectangleDivBorderRadius52,
    rectangleDivBorderRadius53,
    rectangleDivBorderRadius54,
    rectangleDivBorderRadius55,
    rectangleDivBorderRadius56,
    rectangleDivBorderRadius57,
    rectangleDivLeft,
    rectangleDivBorderRadius58,
    rectangleDivBorderRadius59,
    rectangleDivBorderRadius60,
    rectangleDivTop,
    rectangleDivBorderRadius61,
    rectangleDivTop1,
    rectangleDivBorderRadius62,
    rectangleDivBorderRadius63,
    rectangleDivBorderRadius64,
    rectangleDivBorderRadius65,
    rectangleDivBorderRadius66,
    rectangleDivBottom,
    rectangleDivBorderRadius67,
    rectangleDivBottom1,
    rectangleDivBorderRadius68,
    rectangleDivBorderRadius69,
    rectangleDivBorderRadius70,
    rectangleDivTop2,
    rectangleDivBorderRadius71,
    rectangleDivTop3,
    rectangleDivBorderRadius72,
    rectangleDivBorderRadius73,
    rectangleDivBorderRadius74,
    rectangleDivBorderRadius75,
    rectangleDivBorderRadius76,
    rectangleDivBottom2,
    rectangleDivRight,
    rectangleDivBorderRadius77,
    rectangleDivBottom3,
    rectangleDivBorderRadius78,
    rectangleDivLeft1,
    rectangleDivBorderRadius79,
    rectangleDivBorderRadius80,
    rectangleDivTop4,
    rectangleDivBorderRadius81,
    rectangleDivTop5,
    rectangleDivBorderRadius82,
    rectangleDivBorderRadius83,
    rectangleDivBorderRadius84,
    rectangleDivBorderRadius85,
    rectangleDivBorderRadius86,
    rectangleDivBottom4,
    rectangleDivRight1,
    rectangleDivBorderRadius87,
    rectangleDivBottom5,
    rectangleDivBorderRadius88,
    rectangleDivLeft2,
    rectangleDivBorderRadius89,
    rectangleDivBorderRadius90,
    rectangleDivBorderRadius91,
    rectangleDivBorderRadius92,
    rectangleDivBorderRadius93,
    rectangleDivBorderRadius94,
    rectangleDivBorderRadius95,
    rectangleDivBorderRadius96,
    rectangleDivBorderRadius97,
    rectangleDivBorderRadius98,
    rectangleDivBorderRadius99,
    rectangleDivBorderRadius100,
    rectangleDivBorderRadius101,
    rectangleDivBorderRadius102,
    rectangleDivBorderRadius103,
    rectangleDivBorderRadius104,
    rectangleDivBorderRadius105,
    rectangleDivBorderRadius106,
    rectangleDivBorderRadius107,
    rectangleDivBorderRadius108,
    rectangleDivBorderRadius109,
    rectangleDivBorderRadius110,
    rectangleDivBorderRadius111,
    rectangleDivBorderRadius112,
    rectangleDivBorderRadius113,
    rectangleDivBorderRadius114,
    rectangleDivBorderRadius115,
    rectangleDivBorderRadius116,
    rectangleDivBorderRadius117,
    rectangleDivLeft3,
    rectangleDivBorderRadius118,
    rectangleDivBorderRadius119,
    rectangleDivBorderRadius120,
    rectangleDivBorderRadius121,
    rectangleDivBorderRadius122,
    rectangleDivBorderRadius123,
    rectangleDivRight2,
    rectangleDivBorderRadius124,
    rectangleDivBorderRadius125,
    rectangleDivBorderRadius126,
    rectangleDivBorderRadius127,
    rectangleDivLeft4,
    rectangleDivBorderRadius128,
    rectangleDivBorderRadius129,
    rectangleDivBorderRadius130,
    rectangleDivBorderRadius131,
    rectangleDivBorderRadius132,
    rectangleDivBorderRadius133,
    rectangleDivBorderRadius134,
    rectangleDivBorderRadius135,
    rectangleDivBorderRadius136,
    rectangleDivBorderRadius137,
    rectangleDivLeft5,
    rectangleDivBorderRadius138,
    rectangleDivBorderRadius139,
    rectangleDivBorderRadius140,
    rectangleDivBorderRadius141,
    rectangleDivBorderRadius142,
    rectangleDivBorderRadius143,
    rectangleDivBorderRadius144,
    rectangleDivBorderRadius145,
    rectangleDivBorderRadius146,
    rectangleDivBorderRadius147,
    rectangleDivBorderRadius148,
    rectangleDivBorderRadius149,
    rectangleDivBorderRadius150,
    rectangleDivBorderRadius151,
    rectangleDivBorder1,
    rectangleDivBackgroundColor1,
    rectangleDivBorderRadius152,
    rectangleDivBorderRadius153,
    rectangleDivRight3,
    rectangleDivBorderRadius154,
    rectangleDivBorderRadius155,
    rectangleDivBorderRadius156,
    rectangleDivBorderRadius157,
    rectangleDivLeft6,
    rectangleDivBorderRadius158,
    rectangleDivBorderRadius159,
    rectangleDivBorderRadius160,
    rectangleDivBorder2,
    rectangleDivBackgroundColor2,
    rectangleDivBorderRadius161,
    rectangleDivBorderRadius162,
    rectangleDivBorder3,
    rectangleDivBackgroundColor3,
    rectangleDivBorderRadius163,
    rectangleDivBorderRadius164,
    rectangleDivBorderRadius165,
    rectangleDivBorderRadius166,
    rectangleDivBorderRadius167,
    rectangleDivBorderRadius168,
    rectangleDivLeft7,
    rectangleDivBorderRadius169,
  }) => {
    const audioStyle: CSS.Properties = useMemo(() => {
      return {
        width: audioWidth,
        height: audioHeight,
      };
    }, [audioWidth, audioHeight]);

    const rectangleDivStyle: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius,
      };
    }, [rectangleDivBorderRadius]);

    const rectangleDiv1Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius1,
      };
    }, [rectangleDivBorderRadius1]);

    const rectangleDiv2Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius2,
      };
    }, [rectangleDivBorderRadius2]);

    const rectangleDiv3Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius3,
      };
    }, [rectangleDivBorderRadius3]);

    const rectangleDiv4Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius4,
      };
    }, [rectangleDivBorderRadius4]);

    const rectangleDiv5Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius5,
      };
    }, [rectangleDivBorderRadius5]);

    const rectangleDiv6Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius6,
      };
    }, [rectangleDivBorderRadius6]);

    const rectangleDiv7Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius7,
      };
    }, [rectangleDivBorderRadius7]);

    const rectangleDiv8Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius8,
      };
    }, [rectangleDivBorderRadius8]);

    const rectangleDiv9Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius9,
      };
    }, [rectangleDivBorderRadius9]);

    const rectangleDiv10Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius10,
      };
    }, [rectangleDivBorderRadius10]);

    const rectangleDiv11Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius11,
      };
    }, [rectangleDivBorderRadius11]);

    const rectangleDiv12Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius12,
      };
    }, [rectangleDivBorderRadius12]);

    const rectangleDiv13Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius13,
      };
    }, [rectangleDivBorderRadius13]);

    const rectangleDiv14Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius14,
      };
    }, [rectangleDivBorderRadius14]);

    const rectangleDiv15Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius15,
      };
    }, [rectangleDivBorderRadius15]);

    const rectangleDiv16Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius16,
      };
    }, [rectangleDivBorderRadius16]);

    const rectangleDiv17Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius17,
      };
    }, [rectangleDivBorderRadius17]);

    const rectangleDiv18Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius18,
      };
    }, [rectangleDivBorderRadius18]);

    const rectangleDiv19Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius19,
      };
    }, [rectangleDivBorderRadius19]);

    const rectangleDiv20Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius20,
      };
    }, [rectangleDivBorderRadius20]);

    const rectangleDiv21Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius21,
      };
    }, [rectangleDivBorderRadius21]);

    const rectangleDiv22Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius22,
      };
    }, [rectangleDivBorderRadius22]);

    const rectangleDiv23Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius23,
      };
    }, [rectangleDivBorderRadius23]);

    const rectangleDiv24Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius24,
      };
    }, [rectangleDivBorderRadius24]);

    const rectangleDiv25Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius25,
      };
    }, [rectangleDivBorderRadius25]);

    const rectangleDiv26Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius26,
      };
    }, [rectangleDivBorderRadius26]);

    const rectangleDiv27Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius27,
      };
    }, [rectangleDivBorderRadius27]);

    const rectangleDiv28Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius28,
      };
    }, [rectangleDivBorderRadius28]);

    const rectangleDiv29Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius29,
      };
    }, [rectangleDivBorderRadius29]);

    const rectangleDiv30Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius30,
      };
    }, [rectangleDivBorderRadius30]);

    const rectangleDiv31Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius31,
      };
    }, [rectangleDivBorderRadius31]);

    const rectangleDiv32Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius32,
      };
    }, [rectangleDivBorderRadius32]);

    const rectangleDiv33Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius33,
      };
    }, [rectangleDivBorderRadius33]);

    const rectangleDiv34Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius34,
      };
    }, [rectangleDivBorderRadius34]);

    const rectangleDiv35Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius35,
      };
    }, [rectangleDivBorderRadius35]);

    const rectangleDiv36Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius36,
        border: rectangleDivBorder,
        backgroundColor: rectangleDivBackgroundColor,
      };
    }, [
      rectangleDivBorderRadius36,
      rectangleDivBorder,
      rectangleDivBackgroundColor,
    ]);

    const rectangleDiv37Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius37,
      };
    }, [rectangleDivBorderRadius37]);

    const rectangleDiv38Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius38,
      };
    }, [rectangleDivBorderRadius38]);

    const rectangleDiv39Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius39,
      };
    }, [rectangleDivBorderRadius39]);

    const rectangleDiv40Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius40,
      };
    }, [rectangleDivBorderRadius40]);

    const rectangleDiv41Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius41,
      };
    }, [rectangleDivBorderRadius41]);

    const rectangleDiv42Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius42,
      };
    }, [rectangleDivBorderRadius42]);

    const rectangleDiv43Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius43,
      };
    }, [rectangleDivBorderRadius43]);

    const rectangleDiv44Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius44,
      };
    }, [rectangleDivBorderRadius44]);

    const rectangleDiv45Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius45,
      };
    }, [rectangleDivBorderRadius45]);

    const rectangleDiv46Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius46,
      };
    }, [rectangleDivBorderRadius46]);

    const rectangleDiv47Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius47,
      };
    }, [rectangleDivBorderRadius47]);

    const rectangleDiv48Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius48,
      };
    }, [rectangleDivBorderRadius48]);

    const rectangleDiv49Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius49,
      };
    }, [rectangleDivBorderRadius49]);

    const rectangleDiv50Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius50,
      };
    }, [rectangleDivBorderRadius50]);

    const rectangleDiv51Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius51,
      };
    }, [rectangleDivBorderRadius51]);

    const rectangleDiv52Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius52,
      };
    }, [rectangleDivBorderRadius52]);

    const rectangleDiv53Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius53,
      };
    }, [rectangleDivBorderRadius53]);

    const rectangleDiv54Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius54,
      };
    }, [rectangleDivBorderRadius54]);

    const rectangleDiv55Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius55,
      };
    }, [rectangleDivBorderRadius55]);

    const rectangleDiv56Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius56,
      };
    }, [rectangleDivBorderRadius56]);

    const rectangleDiv57Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius57,
      };
    }, [rectangleDivBorderRadius57]);

    const rectangleDiv58Style: CSS.Properties = useMemo(() => {
      return {
        left: rectangleDivLeft,
        borderRadius: rectangleDivBorderRadius58,
      };
    }, [rectangleDivLeft, rectangleDivBorderRadius58]);

    const rectangleDiv59Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius59,
      };
    }, [rectangleDivBorderRadius59]);

    const rectangleDiv60Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius60,
        top: rectangleDivTop,
      };
    }, [rectangleDivBorderRadius60, rectangleDivTop]);

    const rectangleDiv61Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius61,
        top: rectangleDivTop1,
      };
    }, [rectangleDivBorderRadius61, rectangleDivTop1]);

    const rectangleDiv62Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius62,
      };
    }, [rectangleDivBorderRadius62]);

    const rectangleDiv63Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius63,
      };
    }, [rectangleDivBorderRadius63]);

    const rectangleDiv64Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius64,
      };
    }, [rectangleDivBorderRadius64]);

    const rectangleDiv65Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius65,
      };
    }, [rectangleDivBorderRadius65]);

    const rectangleDiv66Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius66,
        bottom: rectangleDivBottom,
      };
    }, [rectangleDivBorderRadius66, rectangleDivBottom]);

    const rectangleDiv67Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius67,
        bottom: rectangleDivBottom1,
      };
    }, [rectangleDivBorderRadius67, rectangleDivBottom1]);

    const rectangleDiv68Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius68,
      };
    }, [rectangleDivBorderRadius68]);

    const rectangleDiv69Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius69,
      };
    }, [rectangleDivBorderRadius69]);

    const rectangleDiv70Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius70,
        top: rectangleDivTop2,
      };
    }, [rectangleDivBorderRadius70, rectangleDivTop2]);

    const rectangleDiv71Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius71,
        top: rectangleDivTop3,
      };
    }, [rectangleDivBorderRadius71, rectangleDivTop3]);

    const rectangleDiv72Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius72,
      };
    }, [rectangleDivBorderRadius72]);

    const rectangleDiv73Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius73,
      };
    }, [rectangleDivBorderRadius73]);

    const rectangleDiv74Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius74,
      };
    }, [rectangleDivBorderRadius74]);

    const rectangleDiv75Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius75,
      };
    }, [rectangleDivBorderRadius75]);

    const rectangleDiv76Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius76,
        bottom: rectangleDivBottom2,
      };
    }, [rectangleDivBorderRadius76, rectangleDivBottom2]);

    const rectangleDiv77Style: CSS.Properties = useMemo(() => {
      return {
        right: rectangleDivRight,
        borderRadius: rectangleDivBorderRadius77,
        bottom: rectangleDivBottom3,
      };
    }, [rectangleDivRight, rectangleDivBorderRadius77, rectangleDivBottom3]);

    const rectangleDiv78Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius78,
      };
    }, [rectangleDivBorderRadius78]);

    const rectangleDiv79Style: CSS.Properties = useMemo(() => {
      return {
        left: rectangleDivLeft1,
        borderRadius: rectangleDivBorderRadius79,
      };
    }, [rectangleDivLeft1, rectangleDivBorderRadius79]);

    const rectangleDiv80Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius80,
        top: rectangleDivTop4,
      };
    }, [rectangleDivBorderRadius80, rectangleDivTop4]);

    const rectangleDiv81Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius81,
        top: rectangleDivTop5,
      };
    }, [rectangleDivBorderRadius81, rectangleDivTop5]);

    const rectangleDiv82Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius82,
      };
    }, [rectangleDivBorderRadius82]);

    const rectangleDiv83Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius83,
      };
    }, [rectangleDivBorderRadius83]);

    const rectangleDiv84Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius84,
      };
    }, [rectangleDivBorderRadius84]);

    const rectangleDiv85Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius85,
      };
    }, [rectangleDivBorderRadius85]);

    const rectangleDiv86Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius86,
        bottom: rectangleDivBottom4,
      };
    }, [rectangleDivBorderRadius86, rectangleDivBottom4]);

    const rectangleDiv87Style: CSS.Properties = useMemo(() => {
      return {
        right: rectangleDivRight1,
        borderRadius: rectangleDivBorderRadius87,
        bottom: rectangleDivBottom5,
      };
    }, [rectangleDivRight1, rectangleDivBorderRadius87, rectangleDivBottom5]);

    const rectangleDiv88Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius88,
      };
    }, [rectangleDivBorderRadius88]);

    const rectangleDiv89Style: CSS.Properties = useMemo(() => {
      return {
        left: rectangleDivLeft2,
        borderRadius: rectangleDivBorderRadius89,
      };
    }, [rectangleDivLeft2, rectangleDivBorderRadius89]);

    const rectangleDiv90Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius90,
      };
    }, [rectangleDivBorderRadius90]);

    const rectangleDiv91Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius91,
      };
    }, [rectangleDivBorderRadius91]);

    const rectangleDiv92Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius92,
      };
    }, [rectangleDivBorderRadius92]);

    const rectangleDiv93Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius93,
      };
    }, [rectangleDivBorderRadius93]);

    const rectangleDiv94Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius94,
      };
    }, [rectangleDivBorderRadius94]);

    const rectangleDiv95Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius95,
      };
    }, [rectangleDivBorderRadius95]);

    const rectangleDiv96Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius96,
      };
    }, [rectangleDivBorderRadius96]);

    const rectangleDiv97Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius97,
      };
    }, [rectangleDivBorderRadius97]);

    const rectangleDiv98Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius98,
      };
    }, [rectangleDivBorderRadius98]);

    const rectangleDiv99Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius99,
      };
    }, [rectangleDivBorderRadius99]);

    const rectangleDiv100Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius100,
      };
    }, [rectangleDivBorderRadius100]);

    const rectangleDiv101Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius101,
      };
    }, [rectangleDivBorderRadius101]);

    const rectangleDiv102Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius102,
      };
    }, [rectangleDivBorderRadius102]);

    const rectangleDiv103Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius103,
      };
    }, [rectangleDivBorderRadius103]);

    const rectangleDiv104Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius104,
      };
    }, [rectangleDivBorderRadius104]);

    const rectangleDiv105Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius105,
      };
    }, [rectangleDivBorderRadius105]);

    const rectangleDiv106Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius106,
      };
    }, [rectangleDivBorderRadius106]);

    const rectangleDiv107Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius107,
      };
    }, [rectangleDivBorderRadius107]);

    const rectangleDiv108Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius108,
      };
    }, [rectangleDivBorderRadius108]);

    const rectangleDiv109Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius109,
      };
    }, [rectangleDivBorderRadius109]);

    const rectangleDiv110Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius110,
      };
    }, [rectangleDivBorderRadius110]);

    const rectangleDiv111Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius111,
      };
    }, [rectangleDivBorderRadius111]);

    const rectangleDiv112Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius112,
      };
    }, [rectangleDivBorderRadius112]);

    const rectangleDiv113Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius113,
      };
    }, [rectangleDivBorderRadius113]);

    const rectangleDiv114Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius114,
      };
    }, [rectangleDivBorderRadius114]);

    const rectangleDiv115Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius115,
      };
    }, [rectangleDivBorderRadius115]);

    const rectangleDiv116Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius116,
      };
    }, [rectangleDivBorderRadius116]);

    const rectangleDiv117Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius117,
      };
    }, [rectangleDivBorderRadius117]);

    const rectangleDiv118Style: CSS.Properties = useMemo(() => {
      return {
        left: rectangleDivLeft3,
        borderRadius: rectangleDivBorderRadius118,
      };
    }, [rectangleDivLeft3, rectangleDivBorderRadius118]);

    const rectangleDiv119Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius119,
      };
    }, [rectangleDivBorderRadius119]);

    const rectangleDiv120Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius120,
      };
    }, [rectangleDivBorderRadius120]);

    const rectangleDiv121Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius121,
      };
    }, [rectangleDivBorderRadius121]);

    const rectangleDiv122Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius122,
      };
    }, [rectangleDivBorderRadius122]);

    const rectangleDiv123Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius123,
      };
    }, [rectangleDivBorderRadius123]);

    const rectangleDiv124Style: CSS.Properties = useMemo(() => {
      return {
        right: rectangleDivRight2,
        borderRadius: rectangleDivBorderRadius124,
      };
    }, [rectangleDivRight2, rectangleDivBorderRadius124]);

    const rectangleDiv125Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius125,
      };
    }, [rectangleDivBorderRadius125]);

    const rectangleDiv126Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius126,
      };
    }, [rectangleDivBorderRadius126]);

    const rectangleDiv127Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius127,
      };
    }, [rectangleDivBorderRadius127]);

    const rectangleDiv128Style: CSS.Properties = useMemo(() => {
      return {
        left: rectangleDivLeft4,
        borderRadius: rectangleDivBorderRadius128,
      };
    }, [rectangleDivLeft4, rectangleDivBorderRadius128]);

    const rectangleDiv129Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius129,
      };
    }, [rectangleDivBorderRadius129]);

    const rectangleDiv130Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius130,
      };
    }, [rectangleDivBorderRadius130]);

    const rectangleDiv131Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius131,
      };
    }, [rectangleDivBorderRadius131]);

    const rectangleDiv132Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius132,
      };
    }, [rectangleDivBorderRadius132]);

    const rectangleDiv133Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius133,
      };
    }, [rectangleDivBorderRadius133]);

    const rectangleDiv134Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius134,
      };
    }, [rectangleDivBorderRadius134]);

    const rectangleDiv135Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius135,
      };
    }, [rectangleDivBorderRadius135]);

    const rectangleDiv136Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius136,
      };
    }, [rectangleDivBorderRadius136]);

    const rectangleDiv137Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius137,
      };
    }, [rectangleDivBorderRadius137]);

    const rectangleDiv138Style: CSS.Properties = useMemo(() => {
      return {
        left: rectangleDivLeft5,
        borderRadius: rectangleDivBorderRadius138,
      };
    }, [rectangleDivLeft5, rectangleDivBorderRadius138]);

    const rectangleDiv139Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius139,
      };
    }, [rectangleDivBorderRadius139]);

    const rectangleDiv140Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius140,
      };
    }, [rectangleDivBorderRadius140]);

    const rectangleDiv141Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius141,
      };
    }, [rectangleDivBorderRadius141]);

    const rectangleDiv142Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius142,
      };
    }, [rectangleDivBorderRadius142]);

    const rectangleDiv143Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius143,
      };
    }, [rectangleDivBorderRadius143]);

    const rectangleDiv144Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius144,
      };
    }, [rectangleDivBorderRadius144]);

    const rectangleDiv145Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius145,
      };
    }, [rectangleDivBorderRadius145]);

    const rectangleDiv146Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius146,
      };
    }, [rectangleDivBorderRadius146]);

    const rectangleDiv147Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius147,
      };
    }, [rectangleDivBorderRadius147]);

    const rectangleDiv148Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius148,
      };
    }, [rectangleDivBorderRadius148]);

    const rectangleDiv149Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius149,
      };
    }, [rectangleDivBorderRadius149]);

    const rectangleDiv150Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius150,
      };
    }, [rectangleDivBorderRadius150]);

    const rectangleDiv151Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius151,
        border: rectangleDivBorder1,
        backgroundColor: rectangleDivBackgroundColor1,
      };
    }, [
      rectangleDivBorderRadius151,
      rectangleDivBorder1,
      rectangleDivBackgroundColor1,
    ]);

    const rectangleDiv152Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius152,
      };
    }, [rectangleDivBorderRadius152]);

    const rectangleDiv153Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius153,
      };
    }, [rectangleDivBorderRadius153]);

    const rectangleDiv154Style: CSS.Properties = useMemo(() => {
      return {
        right: rectangleDivRight3,
        borderRadius: rectangleDivBorderRadius154,
      };
    }, [rectangleDivRight3, rectangleDivBorderRadius154]);

    const rectangleDiv155Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius155,
      };
    }, [rectangleDivBorderRadius155]);

    const rectangleDiv156Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius156,
      };
    }, [rectangleDivBorderRadius156]);

    const rectangleDiv157Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius157,
      };
    }, [rectangleDivBorderRadius157]);

    const rectangleDiv158Style: CSS.Properties = useMemo(() => {
      return {
        left: rectangleDivLeft6,
        borderRadius: rectangleDivBorderRadius158,
      };
    }, [rectangleDivLeft6, rectangleDivBorderRadius158]);

    const rectangleDiv159Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius159,
      };
    }, [rectangleDivBorderRadius159]);

    const rectangleDiv160Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius160,
        border: rectangleDivBorder2,
        backgroundColor: rectangleDivBackgroundColor2,
      };
    }, [
      rectangleDivBorderRadius160,
      rectangleDivBorder2,
      rectangleDivBackgroundColor2,
    ]);

    const rectangleDiv161Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius161,
      };
    }, [rectangleDivBorderRadius161]);

    const rectangleDiv162Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius162,
        border: rectangleDivBorder3,
        backgroundColor: rectangleDivBackgroundColor3,
      };
    }, [
      rectangleDivBorderRadius162,
      rectangleDivBorder3,
      rectangleDivBackgroundColor3,
    ]);

    const rectangleDiv163Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius163,
      };
    }, [rectangleDivBorderRadius163]);

    const rectangleDiv164Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius164,
      };
    }, [rectangleDivBorderRadius164]);

    const rectangleDiv165Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius165,
      };
    }, [rectangleDivBorderRadius165]);

    const rectangleDiv166Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius166,
      };
    }, [rectangleDivBorderRadius166]);

    const rectangleDiv167Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius167,
      };
    }, [rectangleDivBorderRadius167]);

    const rectangleDiv168Style: CSS.Properties = useMemo(() => {
      return {
        borderRadius: rectangleDivBorderRadius168,
      };
    }, [rectangleDivBorderRadius168]);

    const rectangleDiv169Style: CSS.Properties = useMemo(() => {
      return {
        left: rectangleDivLeft7,
        borderRadius: rectangleDivBorderRadius169,
      };
    }, [rectangleDivLeft7, rectangleDivBorderRadius169]);

    return (
      <div className="relative w-[710px] h-[46px]" style={audioStyle}>
        <div className="absolute h-[34.78%] w-[5.35%] top-[32.61%] right-[94.65%] bottom-[32.61%] left-[0%]">
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[94.74%] bottom-[39.29%] left-[0%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.5]"
            style={rectangleDivStyle}
          />
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[-5.26%] bottom-[39.29%] left-[100%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5]"
            style={rectangleDiv1Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[84.21%] bottom-[28.57%] left-[10.53%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.6]"
            style={rectangleDiv2Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[5.26%] bottom-[28.57%] left-[89.47%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.6]"
            style={rectangleDiv3Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[73.68%] bottom-[21.43%] left-[21.05%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.7]"
            style={rectangleDiv4Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[15.79%] bottom-[21.43%] left-[78.95%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.7]"
            style={rectangleDiv5Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[63.16%] bottom-[10.71%] left-[31.58%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.8]"
            style={rectangleDiv6Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[26.32%] bottom-[10.71%] left-[68.42%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.8]"
            style={rectangleDiv7Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[52.63%] bottom-[0%] left-[42.11%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd]"
            style={rectangleDiv8Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[36.84%] bottom-[0%] left-[57.89%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0]"
            style={rectangleDiv9Style}
          />
        </div>
        <div className="absolute h-[34.78%] w-[5.35%] top-[32.61%] right-[59.15%] bottom-[32.61%] left-[35.49%]">
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[94.74%] bottom-[39.29%] left-[0%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.5]"
            style={rectangleDiv10Style}
          />
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[-5.26%] bottom-[39.29%] left-[100%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5]"
            style={rectangleDiv11Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[84.21%] bottom-[28.57%] left-[10.53%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.6]"
            style={rectangleDiv12Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[5.26%] bottom-[28.57%] left-[89.47%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.6]"
            style={rectangleDiv13Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[73.68%] bottom-[21.43%] left-[21.05%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.7]"
            style={rectangleDiv14Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[15.79%] bottom-[21.43%] left-[78.95%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.7]"
            style={rectangleDiv15Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[63.16%] bottom-[10.71%] left-[31.58%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.8]"
            style={rectangleDiv16Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[26.32%] bottom-[10.71%] left-[68.42%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.8]"
            style={rectangleDiv17Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[52.63%] bottom-[0%] left-[42.11%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd]"
            style={rectangleDiv18Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[36.84%] bottom-[0%] left-[57.89%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0]"
            style={rectangleDiv19Style}
          />
        </div>
        <div className="absolute h-[34.78%] w-[5.35%] top-[32.61%] right-[23.66%] bottom-[32.61%] left-[70.99%]">
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[94.74%] bottom-[39.29%] left-[0%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.5]"
            style={rectangleDiv20Style}
          />
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[-5.26%] bottom-[39.29%] left-[100%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5]"
            style={rectangleDiv21Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[84.21%] bottom-[28.57%] left-[10.53%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.6]"
            style={rectangleDiv22Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[5.26%] bottom-[28.57%] left-[89.47%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.6]"
            style={rectangleDiv23Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[73.68%] bottom-[21.43%] left-[21.05%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.7]"
            style={rectangleDiv24Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[15.79%] bottom-[21.43%] left-[78.95%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.7]"
            style={rectangleDiv25Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[63.16%] bottom-[10.71%] left-[31.58%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.8]"
            style={rectangleDiv26Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[26.32%] bottom-[10.71%] left-[68.42%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.8]"
            style={rectangleDiv27Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[52.63%] bottom-[0%] left-[42.11%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd]"
            style={rectangleDiv28Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[36.84%] bottom-[0%] left-[57.89%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0]"
            style={rectangleDiv29Style}
          />
        </div>
        <div className="absolute h-[60.87%] w-[5.35%] top-[19.57%] right-[88.73%] bottom-[19.57%] left-[5.92%]">
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[94.74%] bottom-[39.29%] left-[0%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.5]"
            style={rectangleDiv30Style}
          />
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[-5.26%] bottom-[39.29%] left-[100%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5]"
            style={rectangleDiv31Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[84.21%] bottom-[28.57%] left-[10.53%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.6]"
            style={rectangleDiv32Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[5.26%] bottom-[28.57%] left-[89.47%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.6]"
            style={rectangleDiv33Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[73.68%] bottom-[21.43%] left-[21.05%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.7]"
            style={rectangleDiv34Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[15.79%] bottom-[21.43%] left-[78.95%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.7]"
            style={rectangleDiv35Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[63.16%] bottom-[10.71%] left-[31.58%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.8]"
            style={rectangleDiv36Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[26.32%] bottom-[10.71%] left-[68.42%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.8]"
            style={rectangleDiv37Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[52.63%] bottom-[0%] left-[42.11%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd]"
            style={rectangleDiv38Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[36.84%] bottom-[0%] left-[57.89%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0]"
            style={rectangleDiv39Style}
          />
        </div>
        <div className="absolute h-[60.87%] w-[5.35%] top-[19.57%] right-[53.24%] bottom-[19.57%] left-[41.41%]">
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[94.74%] bottom-[39.29%] left-[0%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.5]"
            style={rectangleDiv40Style}
          />
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[-5.26%] bottom-[39.29%] left-[100%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5]"
            style={rectangleDiv41Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[84.21%] bottom-[28.57%] left-[10.53%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.6]"
            style={rectangleDiv42Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[5.26%] bottom-[28.57%] left-[89.47%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.6]"
            style={rectangleDiv43Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[73.68%] bottom-[21.43%] left-[21.05%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.7]"
            style={rectangleDiv44Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[15.79%] bottom-[21.43%] left-[78.95%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.7]"
            style={rectangleDiv45Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[63.16%] bottom-[10.71%] left-[31.58%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.8]"
            style={rectangleDiv46Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[26.32%] bottom-[10.71%] left-[68.42%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.8]"
            style={rectangleDiv47Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[52.63%] bottom-[0%] left-[42.11%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd]"
            style={rectangleDiv48Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[36.84%] bottom-[0%] left-[57.89%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0]"
            style={rectangleDiv49Style}
          />
        </div>
        <div className="absolute h-[60.87%] w-[5.35%] top-[19.57%] right-[17.75%] bottom-[19.57%] left-[76.9%]">
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[94.74%] bottom-[39.29%] left-[0%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.5]"
            style={rectangleDiv50Style}
          />
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[-5.26%] bottom-[39.29%] left-[100%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5]"
            style={rectangleDiv51Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[84.21%] bottom-[28.57%] left-[10.53%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.6]"
            style={rectangleDiv52Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[5.26%] bottom-[28.57%] left-[89.47%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.6]"
            style={rectangleDiv53Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[73.68%] bottom-[21.43%] left-[21.05%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.7]"
            style={rectangleDiv54Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[15.79%] bottom-[21.43%] left-[78.95%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.7]"
            style={rectangleDiv55Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[63.16%] bottom-[10.71%] left-[31.58%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.8]"
            style={rectangleDiv56Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[26.32%] bottom-[10.71%] left-[68.42%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.8]"
            style={rectangleDiv57Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[52.63%] bottom-[0%] left-[42.11%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd]"
            style={rectangleDiv58Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[36.84%] bottom-[0%] left-[57.89%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0]"
            style={rectangleDiv59Style}
          />
        </div>
        <div className="absolute h-[47.83%] w-[5.35%] top-[26.09%] right-[82.82%] bottom-[26.09%] left-[11.83%]">
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[94.74%] bottom-[39.29%] left-[0%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.5]"
            style={rectangleDiv60Style}
          />
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[-5.26%] bottom-[39.29%] left-[100%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5]"
            style={rectangleDiv61Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[84.21%] bottom-[28.57%] left-[10.53%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.6]"
            style={rectangleDiv62Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[5.26%] bottom-[28.57%] left-[89.47%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.6]"
            style={rectangleDiv63Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[73.68%] bottom-[21.43%] left-[21.05%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.7]"
            style={rectangleDiv64Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[15.79%] bottom-[21.43%] left-[78.95%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.7]"
            style={rectangleDiv65Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[63.16%] bottom-[10.71%] left-[31.58%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.8]"
            style={rectangleDiv66Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[26.32%] bottom-[10.71%] left-[68.42%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.8]"
            style={rectangleDiv67Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[52.63%] bottom-[0%] left-[42.11%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd]"
            style={rectangleDiv68Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[36.84%] bottom-[0%] left-[57.89%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0]"
            style={rectangleDiv69Style}
          />
        </div>
        <div className="absolute h-[47.83%] w-[5.35%] top-[26.09%] right-[47.32%] bottom-[26.09%] left-[47.32%]">
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[94.74%] bottom-[39.29%] left-[0%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.5]"
            style={rectangleDiv70Style}
          />
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[-5.26%] bottom-[39.29%] left-[100%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5]"
            style={rectangleDiv71Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[84.21%] bottom-[28.57%] left-[10.53%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.6]"
            style={rectangleDiv72Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[5.26%] bottom-[28.57%] left-[89.47%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.6]"
            style={rectangleDiv73Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[73.68%] bottom-[21.43%] left-[21.05%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.7]"
            style={rectangleDiv74Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[15.79%] bottom-[21.43%] left-[78.95%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.7]"
            style={rectangleDiv75Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[63.16%] bottom-[10.71%] left-[31.58%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.8]"
            style={rectangleDiv76Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[26.32%] bottom-[10.71%] left-[68.42%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.8]"
            style={rectangleDiv77Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[52.63%] bottom-[0%] left-[42.11%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd]"
            style={rectangleDiv78Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[36.84%] bottom-[0%] left-[57.89%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0]"
            style={rectangleDiv79Style}
          />
        </div>
        <div className="absolute h-[47.83%] w-[5.35%] top-[26.09%] right-[11.83%] bottom-[26.09%] left-[82.82%]">
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[94.74%] bottom-[39.29%] left-[0%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.5]"
            style={rectangleDiv80Style}
          />
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[-5.26%] bottom-[39.29%] left-[100%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5]"
            style={rectangleDiv81Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[84.21%] bottom-[28.57%] left-[10.53%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.6]"
            style={rectangleDiv82Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[5.26%] bottom-[28.57%] left-[89.47%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.6]"
            style={rectangleDiv83Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[73.68%] bottom-[21.43%] left-[21.05%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.7]"
            style={rectangleDiv84Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[15.79%] bottom-[21.43%] left-[78.95%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.7]"
            style={rectangleDiv85Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[63.16%] bottom-[10.71%] left-[31.58%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.8]"
            style={rectangleDiv86Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[26.32%] bottom-[10.71%] left-[68.42%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.8]"
            style={rectangleDiv87Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[52.63%] bottom-[0%] left-[42.11%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd]"
            style={rectangleDiv88Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[36.84%] bottom-[0%] left-[57.89%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0]"
            style={rectangleDiv89Style}
          />
        </div>
        <div className="absolute h-[60.87%] w-[5.35%] top-[19.57%] right-[76.9%] bottom-[19.57%] left-[17.75%]">
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[94.74%] bottom-[39.29%] left-[0%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.5]"
            style={rectangleDiv90Style}
          />
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[-5.26%] bottom-[39.29%] left-[100%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5]"
            style={rectangleDiv91Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[84.21%] bottom-[28.57%] left-[10.53%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.6]"
            style={rectangleDiv92Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[5.26%] bottom-[28.57%] left-[89.47%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.6]"
            style={rectangleDiv93Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[73.68%] bottom-[21.43%] left-[21.05%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.7]"
            style={rectangleDiv94Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[15.79%] bottom-[21.43%] left-[78.95%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.7]"
            style={rectangleDiv95Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[63.16%] bottom-[10.71%] left-[31.58%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.8]"
            style={rectangleDiv96Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[26.32%] bottom-[10.71%] left-[68.42%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.8]"
            style={rectangleDiv97Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[52.63%] bottom-[0%] left-[42.11%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd]"
            style={rectangleDiv98Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[36.84%] bottom-[0%] left-[57.89%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0]"
            style={rectangleDiv99Style}
          />
        </div>
        <div className="absolute h-[60.87%] w-[5.35%] top-[19.57%] right-[41.41%] bottom-[19.57%] left-[53.24%]">
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[94.74%] bottom-[39.29%] left-[0%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.5]"
            style={rectangleDiv100Style}
          />
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[-5.26%] bottom-[39.29%] left-[100%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5]"
            style={rectangleDiv101Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[84.21%] bottom-[28.57%] left-[10.53%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.6]"
            style={rectangleDiv102Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[5.26%] bottom-[28.57%] left-[89.47%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.6]"
            style={rectangleDiv103Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[73.68%] bottom-[21.43%] left-[21.05%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.7]"
            style={rectangleDiv104Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[15.79%] bottom-[21.43%] left-[78.95%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.7]"
            style={rectangleDiv105Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[63.16%] bottom-[10.71%] left-[31.58%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.8]"
            style={rectangleDiv106Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[26.32%] bottom-[10.71%] left-[68.42%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.8]"
            style={rectangleDiv107Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[52.63%] bottom-[0%] left-[42.11%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd]"
            style={rectangleDiv108Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[36.84%] bottom-[0%] left-[57.89%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0]"
            style={rectangleDiv109Style}
          />
        </div>
        <div className="absolute h-[60.87%] w-[5.35%] top-[19.57%] right-[5.92%] bottom-[19.57%] left-[88.73%]">
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[94.74%] bottom-[39.29%] left-[0%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.5]"
            style={rectangleDiv110Style}
          />
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[-5.26%] bottom-[39.29%] left-[100%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5]"
            style={rectangleDiv111Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[84.21%] bottom-[28.57%] left-[10.53%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.6]"
            style={rectangleDiv112Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[5.26%] bottom-[28.57%] left-[89.47%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.6]"
            style={rectangleDiv113Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[73.68%] bottom-[21.43%] left-[21.05%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.7]"
            style={rectangleDiv114Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[15.79%] bottom-[21.43%] left-[78.95%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.7]"
            style={rectangleDiv115Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[63.16%] bottom-[10.71%] left-[31.58%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.8]"
            style={rectangleDiv116Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[26.32%] bottom-[10.71%] left-[68.42%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.8]"
            style={rectangleDiv117Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[52.63%] bottom-[0%] left-[42.11%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd]"
            style={rectangleDiv118Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[36.84%] bottom-[0%] left-[57.89%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0]"
            style={rectangleDiv119Style}
          />
        </div>
        <div className="absolute h-[60.87%] w-[5.35%] top-[19.57%] right-[70.99%] bottom-[19.57%] left-[23.66%]">
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[94.74%] bottom-[39.29%] left-[0%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.5]"
            style={rectangleDiv120Style}
          />
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[-5.26%] bottom-[39.29%] left-[100%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5]"
            style={rectangleDiv121Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[84.21%] bottom-[28.57%] left-[10.53%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.6]"
            style={rectangleDiv122Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[5.26%] bottom-[28.57%] left-[89.47%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.6]"
            style={rectangleDiv123Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[73.68%] bottom-[21.43%] left-[21.05%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.7]"
            style={rectangleDiv124Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[15.79%] bottom-[21.43%] left-[78.95%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.7]"
            style={rectangleDiv125Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[63.16%] bottom-[10.71%] left-[31.58%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.8]"
            style={rectangleDiv126Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[26.32%] bottom-[10.71%] left-[68.42%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.8]"
            style={rectangleDiv127Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[52.63%] bottom-[0%] left-[42.11%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd]"
            style={rectangleDiv128Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[36.84%] bottom-[0%] left-[57.89%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0]"
            style={rectangleDiv129Style}
          />
        </div>
        <div className="absolute h-[60.87%] w-[5.35%] top-[19.57%] right-[35.49%] bottom-[19.57%] left-[59.15%]">
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[94.74%] bottom-[39.29%] left-[0%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.5]"
            style={rectangleDiv130Style}
          />
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[-5.26%] bottom-[39.29%] left-[100%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5]"
            style={rectangleDiv131Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[84.21%] bottom-[28.57%] left-[10.53%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.6]"
            style={rectangleDiv132Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[5.26%] bottom-[28.57%] left-[89.47%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.6]"
            style={rectangleDiv133Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[73.68%] bottom-[21.43%] left-[21.05%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.7]"
            style={rectangleDiv134Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[15.79%] bottom-[21.43%] left-[78.95%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.7]"
            style={rectangleDiv135Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[63.16%] bottom-[10.71%] left-[31.58%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.8]"
            style={rectangleDiv136Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[26.32%] bottom-[10.71%] left-[68.42%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.8]"
            style={rectangleDiv137Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[52.63%] bottom-[0%] left-[42.11%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd]"
            style={rectangleDiv138Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[36.84%] bottom-[0%] left-[57.89%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0]"
            style={rectangleDiv139Style}
          />
        </div>
        <div className="absolute h-[60.87%] w-[5.35%] top-[19.57%] right-[0%] bottom-[19.57%] left-[94.65%]">
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[94.74%] bottom-[39.29%] left-[0%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.5]"
            style={rectangleDiv140Style}
          />
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[-5.26%] bottom-[39.29%] left-[100%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5]"
            style={rectangleDiv141Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[84.21%] bottom-[28.57%] left-[10.53%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.6]"
            style={rectangleDiv142Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[5.26%] bottom-[28.57%] left-[89.47%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.6]"
            style={rectangleDiv143Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[73.68%] bottom-[21.43%] left-[21.05%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.7]"
            style={rectangleDiv144Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[15.79%] bottom-[21.43%] left-[78.95%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.7]"
            style={rectangleDiv145Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[63.16%] bottom-[10.71%] left-[31.58%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.8]"
            style={rectangleDiv146Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[26.32%] bottom-[10.71%] left-[68.42%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.8]"
            style={rectangleDiv147Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[52.63%] bottom-[0%] left-[42.11%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd]"
            style={rectangleDiv148Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[36.84%] bottom-[0%] left-[57.89%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0]"
            style={rectangleDiv149Style}
          />
        </div>
        <div className="absolute h-full w-[5.35%] top-[0%] right-[65.07%] bottom-[0%] left-[29.58%]">
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[94.74%] bottom-[39.29%] left-[0%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.5]"
            style={rectangleDiv150Style}
          />
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[-5.26%] bottom-[39.29%] left-[100%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5]"
            style={rectangleDiv151Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[84.21%] bottom-[28.57%] left-[10.53%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.6]"
            style={rectangleDiv152Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[5.26%] bottom-[28.57%] left-[89.47%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.6]"
            style={rectangleDiv153Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[73.68%] bottom-[21.43%] left-[21.05%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.7]"
            style={rectangleDiv154Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[15.79%] bottom-[21.43%] left-[78.95%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.7]"
            style={rectangleDiv155Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[63.16%] bottom-[10.71%] left-[31.58%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.8]"
            style={rectangleDiv156Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[26.32%] bottom-[10.71%] left-[68.42%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.8]"
            style={rectangleDiv157Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[52.63%] bottom-[0%] left-[42.11%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd]"
            style={rectangleDiv158Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[36.84%] bottom-[0%] left-[57.89%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0]"
            style={rectangleDiv159Style}
          />
        </div>
        <div className="absolute h-full w-[5.35%] top-[0%] right-[29.58%] bottom-[0%] left-[65.07%]">
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[94.74%] bottom-[39.29%] left-[0%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.5]"
            style={rectangleDiv160Style}
          />
          <div
            className="absolute h-[21.43%] w-[5.26%] top-[39.29%] right-[-5.26%] bottom-[39.29%] left-[100%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5]"
            style={rectangleDiv161Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[84.21%] bottom-[28.57%] left-[10.53%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.6]"
            style={rectangleDiv162Style}
          />
          <div
            className="absolute h-[42.86%] w-[5.26%] top-[28.57%] right-[5.26%] bottom-[28.57%] left-[89.47%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.6]"
            style={rectangleDiv163Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[73.68%] bottom-[21.43%] left-[21.05%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.7]"
            style={rectangleDiv164Style}
          />
          <div
            className="absolute h-[57.14%] w-[5.26%] top-[21.43%] right-[15.79%] bottom-[21.43%] left-[78.95%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.7]"
            style={rectangleDiv165Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[63.16%] bottom-[10.71%] left-[31.58%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] opacity-[0.8]"
            style={rectangleDiv166Style}
          />
          <div
            className="absolute h-[78.57%] w-[5.26%] top-[10.71%] right-[26.32%] bottom-[10.71%] left-[68.42%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.8]"
            style={rectangleDiv167Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[52.63%] bottom-[0%] left-[42.11%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd]"
            style={rectangleDiv168Style}
          />
          <div
            className="absolute h-full w-[5.26%] top-[0%] right-[36.84%] bottom-[0%] left-[57.89%] rounded-3xs [background:linear-gradient(180deg,_rgba(7,_87,_222,_0.8),_rgba(255,_171,_252,_0.33)),_#018cfd] [transform:_rotate(180deg)] [transform-origin:0_0]"
            style={rectangleDiv169Style}
          />
        </div>
      </div>
    );
  }
);

export default Audio1;
