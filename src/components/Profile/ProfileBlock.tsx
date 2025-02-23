import { FC } from "react";
import { IProfile } from "./IProfileBlock";
import styles from "./ProfileBlock.module.scss";
import Button from "../../ui/Button/Button";
import { TbSettings } from "react-icons/tb";
import PetList from "../PetsList/PetList";
// test imports
import photo from "../../img.jpg";
import foto from "../../assets/person.png";
import Avatar from "../../ui/Avatar/Avatar";

const ProfileBlock: FC<IProfile> = ({ id }) => {
  return (
    <div className={styles.profile}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
      <div className={styles.wrapper}>
        <div className={styles.profilePhoto}>
          <Avatar url={foto} height={100} width={100} userId={id} />
        </div>

        <div className={styles.information}>
          <div className={styles.credentials}>
            <div className={styles.nickName}>@alicemitchell</div>
            <div className={styles.name}>
              <h2>Alice`s friends</h2>
            </div>
            <div className={styles.description}>
              Do it now. Sometimes "Later" Becomes Never
            </div>
          </div>
          <div className={styles.followInformation}>
            <Button
              text='Edit profile'
              variant='BorderBlack'
              icon={<TbSettings />}
            />
            <div className={styles.follow}>
              <div className={styles.followSection}>
                <div className={styles.numbers}>2576</div>
                <div className={styles.infoFollow}>Followers</div>
              </div>
              <div className={styles.followSection}>
                <div className={styles.numbers}>345</div>
                <div className={styles.infoFollow}>Following</div>
              </div>
            </div>
          </div>
        </div>
        <PetList pets={[]} />
      </div>
    </div>
  );
};

export default ProfileBlock;
