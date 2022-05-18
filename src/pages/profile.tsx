import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { Layout, Container, Section } from "~components/layout";
import MemberItem from "~components/memberItem";
import members from "~lib/members.json";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { addOpacity } from "~/src/lib/utils/opacityAnimation";

let imageOpacityValue,
  contentOpacityValue,
  // eslint-disable-next-line prefer-const
  modalOpacityValue = 0;
const Profile: NextPage = () => {
  const [count, setCount] = useState(0);
  const [isModal, setIsModal] = useState(false);

  const handleNextClick = () => {
    if (count >= 8) {
      setCount(0);
    } else {
      setCount(count + 1);
    }

    imageOpacity();
    setTimeout(() => {
      contentOpacity();
    }, 500);
  };

  const handlePrevClick = async () => {
    if (count <= 0) {
      setCount(8);
    } else {
      setCount(count - 1);
    }

    imageOpacity();
    setTimeout(() => {
      contentOpacity();
    }, 500);
  };

  const imageOpacity = () => {
    imageOpacityValue = 0;
    addOpacity({
      opacity: imageOpacityValue,
      DOMByID: "member_modal_image",
      time: 60,
    });
    const modalDOM = document.getElementById("member_modal_content");
    modalDOM && (modalDOM.style.opacity = "0");
  };

  const contentOpacity = async () => {
    contentOpacityValue = 0;
    addOpacity({
      opacity: contentOpacityValue,
      DOMByID: "member_modal_content",
      time: 50,
    });
  };

  const removeOpacity = async (opacity: number) => {
    if (opacity > 0) {
      opacity -= 0.3;
      setTimeout(function () {
        removeOpacity(opacity);
      }, 10);
    }
    const modalDOM = document.getElementById("member_modal");
    modalDOM && (modalDOM.style.opacity = `${opacity}`);
  };

  const handleOpenModalClick = async () => {
    await setIsModal(true);
    addOpacity({
      opacity: modalOpacityValue,
      DOMByID: "member_modal",
      time: 40,
    });
  };

  const handleCloseModalClick = async () => {
    await removeOpacity(modalOpacityValue);
    setIsModal(false);
  };

  useEffect(() => {
    isModal ? document.body.classList.add("overflow-hidden") : document.body.classList.remove("overflow-hidden");
  }, [isModal]);

  const memberByCount = members[count];
  const intagramID = memberByCount.instagram.split("/")[3];

  const metaDescription =
    "TWICE (Korean: 트와이스; RR: Teuwaiseu; Japanese: トゥワイス, Hepburn: To~uwaisu; commonly stylized in all caps as TWICE) is a South Korean girl group formed by JYP Entertainment. The group is composed of nine members: Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeyoung, and Tzuyu. Twice was formed under the television program Sixteen (2015) and debuted on October 20, 2015, with the extended play (EP) The Story Begins.";

  return (
    <>
      <Layout title="Profile | TWICE" metaDescription={metaDescription}>
        <Container>
          <Section title="Members">
            <div className="member_block">
              {members.map((member, index) => {
                return (
                  <MemberItem
                    key={member.nickname}
                    {...member}
                    onClick={() => {
                      setCount(index);
                      handleOpenModalClick();
                    }}
                  />
                );
              })}
            </div>
          </Section>
        </Container>
        {isModal && (
          <div className="member_modal" id="member_modal">
            <div className="member_modal_closeBtn">
              <AiOutlineClose
                onClick={() => {
                  handleCloseModalClick();
                }}
              />
            </div>
            <div className="member_modal_navigation">
              <MdOutlineArrowBackIosNew onClick={handlePrevClick} />
              <MdOutlineArrowForwardIos onClick={handleNextClick} />
            </div>
            <img className="member_modal_image" id="member_modal_image" src={memberByCount.image} alt={memberByCount.name} />
            <div className="member_modal_content" id="member_modal_content">
              <h2 className="member_modal_name">
                <span>{memberByCount.name}</span>
                <span>{memberByCount.nickname}</span>
              </h2>
              <div>Born: {memberByCount.born}</div>
              <div>Blood Type: {memberByCount.bloodType}</div>
              <div className="member_modal_socmed">
                Instagram:{" "}
                <a href={memberByCount.instagram} target="_blank" rel="noopener noreferrer">
                  @{intagramID}
                </a>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Profile;
