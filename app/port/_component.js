import styles from "./page.module.css";

export default function Carrer() {
  return (
    <>
      <section>
        <div className={styles.back_white}>
          <div className={styles.school_title_top}>
            <h1 className={styles.school_title}>경력 </h1>
            <div className={styles.school_title_down}>
              <div>총 1년 1개월</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.carrer_top}>
          <div>
            <div>2023.03 ~</div>
            <div> </div>
            <div>1년 1개월</div>
          </div>
          <div>
            <div>MORAI </div>
            <div>QA</div>
          </div>
          <div>
            <div>
              <h1>주요 직무 및 경력</h1>
              <div>
                <br />
                자사 자율주행 시뮬레이터를 테스트 하고, 테스트 자동화 스크립트를 개발하고 있습니다.
                <br />
                <br />
                - 시뮬레이터 내에 구현된 가상 센서를 테스트 하기 위해 UDP Protocol을 이용한 Parser 코드 개발 <br />
                <br />
                - gRPC Protocol을 이용한 스크립트 개발로 반복적인 테스트의 수행시간 단축 달성
                <br />
                <br />
                - Test 관리 Tool인 Testmo를 통하여 자사의 시뮬레이터를 테스트 진행
                <br />
                <br />
                - 머신 러닝(Tensorflow)을 통하여 자사 시뮬레이터 내에 구현된 소프트웨어 정의 차량 (Software Define Vehicle)의 모델링 검수 스크립트 개발
                <br />
                <br />
                - 삼성전자 미래기술 연구소(SAIT)의 Dataset 생성 과제에 Main QA로서 참여 및 기여
                <br />
                <br />
              <h2>관심사 및 목표</h2>  
                <br />
                OpenCV, Open3D 등 다양한 시각화 라이브러리에 관심이 많습니다.
                <br />
                <br />
                최종적으로 위 시각화 라이브러리들을 이용하여 QA시 수집되는 각종 Data를 시각화하고 개발팀과 더욱 유기적 소통이 가능하게 진행하려고 합니다.
                또한, 위 시각화 Data들을 통해 최종적으로 나은 프로덕트를 만드는 것이 제 목표입니다.
                <br />
                <br />
                혹시 본 포트폴리오에 대한 문의가 있으시면 010-4047-9339로 연락 주시면
                감사하겠습니다.
                <br />
              </div>
                <br />
              <div>파이썬 테스트 자동화 스크립트 개발자, Python, Tensorflow</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
