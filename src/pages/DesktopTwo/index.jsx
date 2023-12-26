import React from "react";

import { Button, Img, Text } from "components";

const DesktopTwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-outfit items-center justify-start mx-auto sm:pl-5 pl-[22px] w-full">
        <div className="bg-gray-50 flex flex-col items-center justify-start max-w-[1418px] mx-auto md:px-5 rounded-[10px] w-full">
          <div className="bg-gray-50 flex flex-col items-center justify-start pt-1 px-1 w-[98%] md:w-full">
            <div className="flex flex-col gap-7 justify-start w-[52%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-[72%] md:w-full">
                <div className="bg-amber-A400 font-montserrat h-14 md:h-[58px] mb-2.5 p-[3px] relative rounded-[18px] w-14">
                  <Text
                    className="absolute h-max inset-[0] justify-center m-auto sm:text-[35.35px] md:text-[37.35px] text-[39.35px] text-indigo-900 tracking-[0.39px] w-max"
                    size="txtMontserratRomanBlack3935"
                  >
                    A
                  </Text>
                  <div className="absolute bg-amber-A400 h-3 right-[14%] top-[20%] w-[29%]"></div>
                </div>
                <Text
                  className="mb-[7px] sm:ml-[0] ml-[158px] sm:mt-0 mt-[27px] text-2xl md:text-[22px] text-gray-900_e5 sm:text-xl"
                  size="txtOutfitSemiBold24"
                >
                  Welcome Ali!
                </Text>
                <Img
                  className="h-14 sm:ml-[0] ml-[91px] sm:mt-0 mt-2.5 w-14"
                  src="images/img_uilsetting.svg"
                  alt="uilsetting"
                />
              </div>
              <div className="flex flex-col items-start justify-start ml-7 md:ml-[0] p-[25px] sm:px-5 rounded-[5px] shadow-bs w-[97%] md:w-full">
                <div className="flex flex-col justify-start mb-[54px] mt-3 w-[83%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                    <Img
                      className="sm:flex-1 h-[124px] md:h-auto object-cover w-[19%] sm:w-full"
                      src="images/img_lightbase1false.png"
                      alt="lightbase1false"
                    />
                    <Img
                      className="sm:flex-1 h-[124px] md:h-auto sm:ml-[0] ml-[55px] object-cover w-[19%] sm:w-full"
                      src="images/img_lightbase6false.png"
                      alt="lightbase6false"
                    />
                    <Img
                      className="sm:flex-1 h-[124px] md:h-auto sm:ml-[0] ml-[55px] object-cover w-[19%] sm:w-full"
                      src="images/img_lightbase8false.png"
                      alt="lightbase8false"
                    />
                    <Img
                      className="sm:flex-1 h-[124px] md:h-auto sm:ml-[0] ml-[33px] object-cover w-[19%] sm:w-full"
                      src="images/img_lightbase13false.png"
                      alt="lightbase13fals"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[13px] mt-[11px] w-[95%] md:w-full">
                    <Text
                      className="text-center text-gray-900_e5 text-xs"
                      size="txtOutfitMedium12"
                    >
                      Move Cursor
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[89px] text-center text-gray-900_e5 text-xs"
                      size="txtOutfitMedium12"
                    >
                      Left Click
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[95px] sm:mt-0 mt-1 text-center text-gray-900_e5 text-xs"
                      size="txtOutfitMedium12"
                    >
                      Right Click
                    </Text>
                    <Text
                      className="mb-1 sm:ml-[0] ml-[50px] text-center text-gray-900_e5 text-xs"
                      size="txtOutfitMedium12"
                    >
                      Open Browser
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[55px] items-center justify-start mt-[23px] w-[76%] md:w-full">
                    <Img
                      className="h-[124px] md:h-auto object-cover w-[24%] sm:w-full"
                      src="images/img_lightbase11false.png"
                      alt="lightbase11fals"
                    />
                    <Img
                      className="h-[124px] md:h-auto object-cover w-[24%] sm:w-full"
                      src="images/img_lightbase11false_124x93.png"
                      alt="lightbase11fals_One"
                    />
                    <Img
                      className="h-[124px] md:h-auto object-cover w-[24%] sm:w-full"
                      src="images/img_lightbase9false.png"
                      alt="lightbase9false"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[33px] mt-3.5 w-[68%] md:w-full">
                    <Text
                      className="text-center text-gray-900_e5 text-xs"
                      size="txtOutfitMedium12"
                    >
                      Back
                    </Text>
                    <Text
                      className="ml-28 text-center text-gray-900_e5 text-xs"
                      size="txtOutfitMedium12"
                    >
                      Forward
                    </Text>
                    <Text
                      className="ml-[90px] text-center text-gray-900_e5 text-xs"
                      size="txtOutfitMedium12"
                    >
                      Stop Tracking
                    </Text>
                  </div>
                  <Img
                    className="h-[49px] md:ml-[0] ml-[335px] mt-[101px] w-[49px]"
                    src="images/img_wpfcursor.svg"
                    alt="wpfcursor"
                  />
                  <Button className="cursor-pointer font-bold leading-[normal] min-w-[302px] md:ml-[0] ml-[161px] mr-[52px] mt-[179px] text-base text-center tracking-[0.16px]">
                    Back
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 border-gray-900_cc border-solid border-t flex flex-col items-center justify-end p-9 sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mt-1">
              <Text
                className="text-blue_gray-900_b2 text-lg tracking-[0.18px]"
                size="txtOutfitRegular18"
              >
                © 2023 GrowthX. All Rights Reserved. Designed, Built &
                Maintained by Tumazir
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwoPage;
