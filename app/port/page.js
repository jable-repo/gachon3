import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Carrer from "./_component";

export default function Home() {
  return (
    <main>
      <div className={styles.resume_subject}>
        <h3>
          김상우 포트 폴리오 : Python/gRPC/Tensorflow(ML)/Testmo/Jira/Confluence
        </h3>
      </div>

      <div className={styles.profile_data}>
        <div className={styles.image_margin}>
          <Image
            className={styles.myimage}
            src="/profile/김상우.jpg"
            width={130}
            height={130}
            alt="Picture of the author"
          />

          <Image
            className={styles.myimage2}
            src="/profile/MORAI_Primary_black.png"
            width={130}
            height={130}
            alt="Picture of the Company"
          />

        </div>
        <div className={styles.image_left}>
          <div className={styles.image_test}>
            <div className={styles.profile_info_general_name}>김상우</div>
            <div className={styles.profile_info_general_year}>
              남 2003년 (22세)
            </div>
          </div>
          <div className={styles.profile_info_detail}>
            <div class={styles.profile_label}>휴대폰 | 010-4047-9339</div>
            <div class={styles.profile_label}>Email | swkim@morai.ai</div>
            <div class={styles.profile_label}>
              재직 주소 | 서울시 강남구 테헤란로 78길 16 노벨빌딩 7층
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className={styles.grid_container}>
          <div>
            <div className={styles.grid_item}>학력</div>
            <div className={styles.grid_item}>가천대 </div>
            <div className={styles.grid_item}>
              <div>대학교(4년)</div>
              <div>재학</div>
            </div>
          </div>

          <div>
            <div className={styles.grid_item}>경력</div>
            <div className={styles.grid_item}>(주)MORAI</div>
            <div className={styles.grid_item}>
              <div>재직 중 (2023. 03 ~ )</div>
            </div>
          </div>

          <div>
            <div className={styles.grid_item}>
              인턴&middot;대외활동 / 해외경험
            </div>
            <div className={styles.grid_item}>-</div>
          </div>
        </div>
      </section>

      <section>
        <h1 className={styles.school_title}>주요 보유 기술</h1>
        <div className={styles.school_title_grid_margin}>
          <div className={styles.school_title_grid}>  
            <Link href="https://www.python.org/">
              <button type="button" className={styles.list_btn}>
                <span className={styles.btn_gap}>Python</span>
              </button>
            </Link>

            <Link href="https://www.tensorflow.org/?hl=ko">
              <button type="button" className={styles.list_btn}>
                <span className={styles.btn_gap}>Tensorflow</span>
              </button>
            </Link>

            <Link href="https://grpc.io/">
              <button type="button" className={styles.list_btn}>
                <span className={styles.btn_gap}>gRPC</span>
              </button>
            </Link>

            <Link href="https://www.testmo.com/">
              <button type="button" className={styles.list_btn}>
                <span className={styles.btn_gap}>Testmo</span>
              </button>
            </Link>

            <Link href="https://www.atlassian.com/software/confluence/">
              <button type="button" className={styles.list_btn}>
                <span className={styles.btn_gap}>Confluence</span>
              </button>
            </Link>

            <Link href="https://www.jira.com/">
              <button type="button" className={styles.list_btn}>
                <span className={styles.btn_gap}>Jira</span>
              </button>
            </Link>
          </div>
        </div>
        <h2 className={styles.school_title}>학력</h2>
        <div className={styles.school_title_grid_margin}>
          <div className={styles.school_title_grid}>
            <div>
              <div>2022. 03 ~ 재학 중</div>
              <div>재학</div>
            </div>
            <div>
              <div>
                <div>가천대 </div>
                <div>미래자동차학과</div>
              </div>
            </div>
          </div>
          <div className={styles.school_title_grid}>
            <div>
              <div>2022</div>
              <div>졸업 </div>
            </div>
            <div>
              <div>
                <div>초월고등학교 </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Carrer />
    </main>
  );
}
