import type { NextPage } from "next";
import { memo } from "react";
import Audio1 from "./audio1";

const Playyer: NextPage = memo(() => {
  return (
    <form className="rounded-mini bg-gray-400 w-[244px] h-[168px] flex flex-col p-[5px] box-border items-start justify-between">
      <div className="w-[234px] flex flex-row items-start justify-start gap-[62px]">
        <div className="w-[156px] flex flex-row items-end justify-start gap-[3px]">
          <img
            className="relative w-[35.8px] h-[37.03px] object-cover"
            alt=""
            src="/cover2@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <b className="relative text-[8.56px] leading-[9.26px] flex font-gotham-pro text-white text-left items-center w-[90.73px] h-[9.88px] shrink-0">
              Artist
            </b>
            <div className="relative text-[7.34px] leading-[9.79px] text-white text-left flex items-center w-[93.2px] h-[19.75px] shrink-0">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0 tracking-[0.05em] font-medium font-gotham-pro">{`You are amaizing! `}</p>
                <p className="m-0 font-gotham-pro">(Remix by Artist)</p>
              </span>
            </div>
          </div>
        </div>
        <div className="relative w-3 h-3 overflow-hidden shrink-0">
          <div className="absolute top-[4.5px] left-[0px] w-3 flex flex-row items-start justify-start gap-[1px]">
            <div className="relative rounded-[50%] bg-white w-[3px] h-[3px]" />
            <div className="relative rounded-[50%] bg-white w-[3px] h-[3px]" />
            <div className="relative rounded-[50%] bg-white w-[3px] h-[3px]" />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-[234px] h-11 flex flex-col py-[11px] px-0.5 box-border items-start justify-center">
        <Audio1
          audioWidth="230px"
          audioHeight="13px"
          rectangleDivBorderRadius="2.86px"
          rectangleDivBorderRadius1="2.86px"
          rectangleDivBorderRadius2="2.86px"
          rectangleDivBorderRadius3="2.86px"
          rectangleDivBorderRadius4="2.86px"
          rectangleDivBorderRadius5="2.86px"
          rectangleDivBorderRadius6="2.86px"
          rectangleDivBorderRadius7="2.86px"
          rectangleDivBorderRadius8="2.86px"
          rectangleDivBorderRadius9="2.86px"
          rectangleDivBorderRadius10="2.86px"
          rectangleDivBorderRadius11="2.86px"
          rectangleDivBorderRadius12="2.86px"
          rectangleDivBorderRadius13="2.86px"
          rectangleDivBorderRadius14="2.86px"
          rectangleDivBorderRadius15="2.86px"
          rectangleDivBorderRadius16="2.86px"
          rectangleDivBorderRadius17="2.86px"
          rectangleDivBorderRadius18="2.86px"
          rectangleDivBorderRadius19="2.86px"
          rectangleDivBorderRadius20="2.86px"
          rectangleDivBorderRadius21="2.86px"
          rectangleDivBorderRadius22="2.86px"
          rectangleDivBorderRadius23="2.86px"
          rectangleDivBorderRadius24="2.86px"
          rectangleDivBorderRadius25="2.86px"
          rectangleDivBorderRadius26="2.86px"
          rectangleDivBorderRadius27="2.86px"
          rectangleDivBorderRadius28="2.86px"
          rectangleDivBorderRadius29="2.86px"
          rectangleDivBorderRadius30="2.86px"
          rectangleDivBorderRadius31="2.86px"
          rectangleDivBorderRadius32="2.86px"
          rectangleDivBorderRadius33="2.86px"
          rectangleDivBorderRadius34="2.86px"
          rectangleDivBorderRadius35="2.86px"
          rectangleDivBorderRadius36="2.86px"
          rectangleDivBorder="none"
          rectangleDivBackgroundColor="transparent"
          rectangleDivBorderRadius37="2.86px"
          rectangleDivBorderRadius38="2.86px"
          rectangleDivBorderRadius39="2.86px"
          rectangleDivBorderRadius40="2.86px"
          rectangleDivBorderRadius41="2.86px"
          rectangleDivBorderRadius42="2.86px"
          rectangleDivBorderRadius43="2.86px"
          rectangleDivBorderRadius44="2.86px"
          rectangleDivBorderRadius45="2.86px"
          rectangleDivBorderRadius46="2.86px"
          rectangleDivBorderRadius47="2.86px"
          rectangleDivBorderRadius48="2.86px"
          rectangleDivBorderRadius49="2.86px"
          rectangleDivBorderRadius50="2.86px"
          rectangleDivBorderRadius51="2.86px"
          rectangleDivBorderRadius52="2.86px"
          rectangleDivBorderRadius53="2.86px"
          rectangleDivBorderRadius54="2.86px"
          rectangleDivBorderRadius55="2.86px"
          rectangleDivBorderRadius56="2.86px"
          rectangleDivBorderRadius57="2.86px"
          rectangleDivLeft="42.1%"
          rectangleDivBorderRadius58="2.86px"
          rectangleDivBorderRadius59="2.86px"
          rectangleDivBorderRadius60="2.86px"
          rectangleDivTop="39.29%"
          rectangleDivBorderRadius61="2.86px"
          rectangleDivTop1="39.29%"
          rectangleDivBorderRadius62="2.86px"
          rectangleDivBorderRadius63="2.86px"
          rectangleDivBorderRadius64="2.86px"
          rectangleDivBorderRadius65="2.86px"
          rectangleDivBorderRadius66="2.86px"
          rectangleDivBottom="10.71%"
          rectangleDivBorderRadius67="2.86px"
          rectangleDivBottom1="10.71%"
          rectangleDivBorderRadius68="2.86px"
          rectangleDivBorderRadius69="2.86px"
          rectangleDivBorderRadius70="2.86px"
          rectangleDivTop2="39.29%"
          rectangleDivBorderRadius71="2.86px"
          rectangleDivTop3="39.29%"
          rectangleDivBorderRadius72="2.86px"
          rectangleDivBorderRadius73="2.86px"
          rectangleDivBorderRadius74="2.86px"
          rectangleDivBorderRadius75="2.86px"
          rectangleDivBorderRadius76="2.86px"
          rectangleDivBottom2="10.71%"
          rectangleDivRight="26.31%"
          rectangleDivBorderRadius77="2.86px"
          rectangleDivBottom3="10.71%"
          rectangleDivBorderRadius78="2.86px"
          rectangleDivLeft1="57.9%"
          rectangleDivBorderRadius79="2.86px"
          rectangleDivBorderRadius80="2.86px"
          rectangleDivTop4="39.29%"
          rectangleDivBorderRadius81="2.86px"
          rectangleDivTop5="39.29%"
          rectangleDivBorderRadius82="2.86px"
          rectangleDivBorderRadius83="2.86px"
          rectangleDivBorderRadius84="2.86px"
          rectangleDivBorderRadius85="2.86px"
          rectangleDivBorderRadius86="2.86px"
          rectangleDivBottom4="10.71%"
          rectangleDivRight1="26.31%"
          rectangleDivBorderRadius87="2.86px"
          rectangleDivBottom5="10.71%"
          rectangleDivBorderRadius88="2.86px"
          rectangleDivLeft2="57.9%"
          rectangleDivBorderRadius89="2.86px"
          rectangleDivBorderRadius90="2.86px"
          rectangleDivBorderRadius91="2.86px"
          rectangleDivBorderRadius92="2.86px"
          rectangleDivBorderRadius93="2.86px"
          rectangleDivBorderRadius94="2.86px"
          rectangleDivBorderRadius95="2.86px"
          rectangleDivBorderRadius96="2.86px"
          rectangleDivBorderRadius97="2.86px"
          rectangleDivBorderRadius98="2.86px"
          rectangleDivBorderRadius99="2.86px"
          rectangleDivBorderRadius100="2.86px"
          rectangleDivBorderRadius101="2.86px"
          rectangleDivBorderRadius102="2.86px"
          rectangleDivBorderRadius103="2.86px"
          rectangleDivBorderRadius104="2.86px"
          rectangleDivBorderRadius105="2.86px"
          rectangleDivBorderRadius106="2.86px"
          rectangleDivBorderRadius107="2.86px"
          rectangleDivBorderRadius108="2.86px"
          rectangleDivBorderRadius109="2.86px"
          rectangleDivBorderRadius110="2.86px"
          rectangleDivBorderRadius111="2.86px"
          rectangleDivBorderRadius112="2.86px"
          rectangleDivBorderRadius113="2.86px"
          rectangleDivBorderRadius114="2.86px"
          rectangleDivBorderRadius115="2.86px"
          rectangleDivBorderRadius116="2.86px"
          rectangleDivBorderRadius117="2.86px"
          rectangleDivLeft3="42.1%"
          rectangleDivBorderRadius118="2.86px"
          rectangleDivBorderRadius119="2.86px"
          rectangleDivBorderRadius120="2.86px"
          rectangleDivBorderRadius121="2.86px"
          rectangleDivBorderRadius122="2.86px"
          rectangleDivBorderRadius123="2.86px"
          rectangleDivRight2="73.69%"
          rectangleDivBorderRadius124="2.86px"
          rectangleDivBorderRadius125="2.86px"
          rectangleDivBorderRadius126="2.86px"
          rectangleDivBorderRadius127="2.86px"
          rectangleDivLeft4="42.1%"
          rectangleDivBorderRadius128="2.86px"
          rectangleDivBorderRadius129="2.86px"
          rectangleDivBorderRadius130="2.86px"
          rectangleDivBorderRadius131="2.86px"
          rectangleDivBorderRadius132="2.86px"
          rectangleDivBorderRadius133="2.86px"
          rectangleDivBorderRadius134="2.86px"
          rectangleDivBorderRadius135="2.86px"
          rectangleDivBorderRadius136="2.86px"
          rectangleDivBorderRadius137="2.86px"
          rectangleDivLeft5="42.1%"
          rectangleDivBorderRadius138="2.86px"
          rectangleDivBorderRadius139="2.86px"
          rectangleDivBorderRadius140="2.86px"
          rectangleDivBorderRadius141="2.86px"
          rectangleDivBorderRadius142="2.86px"
          rectangleDivBorderRadius143="2.86px"
          rectangleDivBorderRadius144="2.86px"
          rectangleDivBorderRadius145="2.86px"
          rectangleDivBorderRadius146="2.86px"
          rectangleDivBorderRadius147="2.86px"
          rectangleDivBorderRadius148="2.86px"
          rectangleDivBorderRadius149="2.86px"
          rectangleDivBorderRadius150="2.86px"
          rectangleDivBorderRadius151="2.86px"
          rectangleDivBorder1="none"
          rectangleDivBackgroundColor1="transparent"
          rectangleDivBorderRadius152="2.86px"
          rectangleDivBorderRadius153="2.86px"
          rectangleDivRight3="73.69%"
          rectangleDivBorderRadius154="2.86px"
          rectangleDivBorderRadius155="2.86px"
          rectangleDivBorderRadius156="2.86px"
          rectangleDivBorderRadius157="2.86px"
          rectangleDivLeft6="42.1%"
          rectangleDivBorderRadius158="2.86px"
          rectangleDivBorderRadius159="2.86px"
          rectangleDivBorderRadius160="2.86px"
          rectangleDivBorder2="none"
          rectangleDivBackgroundColor2="transparent"
          rectangleDivBorderRadius161="2.86px"
          rectangleDivBorderRadius162="2.86px"
          rectangleDivBorder3="none"
          rectangleDivBackgroundColor3="transparent"
          rectangleDivBorderRadius163="2.86px"
          rectangleDivBorderRadius164="2.86px"
          rectangleDivBorderRadius165="2.86px"
          rectangleDivBorderRadius166="2.86px"
          rectangleDivBorderRadius167="2.86px"
          rectangleDivBorderRadius168="2.86px"
          rectangleDivLeft7="57.9%"
          rectangleDivBorderRadius169="2.86px"
        />
      </div>
      <div className="w-[233px] flex flex-row items-start justify-between">
        <div className="relative w-[50px] h-10">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle-396.svg"
          />
          <div className="absolute h-[30%] w-[24%] top-[34.84%] right-[38%] bottom-[35.16%] left-[38%] overflow-hidden">
            <div className="absolute top-[1.06px] left-[1.4px] flex flex-row items-start justify-start gap-[4px]">
              <div className="relative rounded-sm bg-white w-[2.6px] h-2.5" />
              <div className="relative rounded-sm bg-white w-[2.6px] h-2.5" />
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[120px] h-10">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-300 w-[120px] h-10" />
          <div className="absolute top-[0px] left-[40.17px] h-10 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-start gap-[8px]">
              <img
                className="relative w-[13px] h-[13px] overflow-hidden shrink-0"
                alt=""
                src="/icon--tracklist.svg"
              />
              <div className="relative text-5xs leading-[8px] font-medium font-gotham-pro text-white text-left">
                PLAYLIST
              </div>
            </div>
          </div>
        </button>
        <img className="relative w-10 h-10" alt="" src="/button-.svg" />
      </div>
    </form>
  );
});

export default Playyer;
