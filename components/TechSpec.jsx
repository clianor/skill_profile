import styles from "../styles/Home.module.css";

export default function TechSpec() {
  return (
    <article className={styles.card}>
      <h2 className={styles.card_title}>Tech Spec</h2>
      <div className={styles.card_contents}>
        <div className={[styles.skills, styles.interval].join(' ')}>
          <div className={styles.skills_title}>
            <h4>Language</h4>
          </div>
          <div className="skills_contents">
            <div className={styles.row}>
              <div className={styles.left_box}>
                <p>Python</p>
              </div>
              <div className={styles.right_box}>
                <div className={[styles.row, styles.tech_contents].join(' ')}>
                  <ul>
                    <li>Slak을 이용한 G Suite, Github, Trello, MS Office 등의 프로그램을 제어하고 관리하는
                      ECC(Everything Control by Chatting) 프로젝트 중 Google Calendar를 활용한 일정 관리 시스템 개발</li>
                    <li>Machine Learning 한국어 감성 분석 연구 어시스트</li>
                    <li>Django 프레임워크를 이용한 사내 도서관리 시스템 개발</li>
                    <li>Flask 프레임워크를 이용한 전기 데이터 분석 API 개발</li>
                    <li>ModbusTCP 기반 수집 전송 프로그램 제작 및 관리자 페이지 개발</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.left_box}>
                <p>Javascript</p>
              </div>
              <div className={styles.right_box}>
                <div className={[styles.row, styles.tech_contents].join(' ')}>
                  <ul>
                    <li>React를 이용한 모니터링 및 시각화 대시보드 개발</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.left_box}>
                <p>C#</p>
              </div>
              <div className={styles.right_box}>
                <div className={[styles.row, styles.tech_contents].join(' ')}>
                  <ul>
                    <li>아주대 요양병원 인사 정보 조회 및 입,퇴사자 관리 및 발령 시스템, 근무 편성표, 인사고과, 인사 통계 기능 개발</li>
                    <li>아주대 요양병원 수당 및 급여 시스템, 급여 전표 생성 및 통계 시스템 개발</li>
                    <li>아주대 요양병원 전표 입력 및 예산 승인 시스템, 일계표, 재무제표, 일용직 근로자 급여 계산기 개발</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.left_box}>
                <p>Golang</p>
              </div>
              <div className={styles.right_box}>
                <div className={[styles.row, styles.tech_contents].join(' ')}>
                  <ul>
                    <li>ModbusTCP 기반 수집 전송 프로그램 개발</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={[styles.skills, styles.interval].join(' ')}>
          <div className={styles.skills_title}>
            <h4>Framework & Library</h4>
          </div>
          <div className="skills_contents">
            <div className={styles.row}>
              <div className={styles.left_box}>
                <p>Django</p>
              </div>
              <div className={styles.right_box}>
                <div className={[styles.row, styles.tech_contents].join(' ')}>
                  <ul>
                    <li>ECC 프로젝트(Everything Control by Chatting) 챗봇 기능 구현</li>
                    <li>사내 도서관리 시스템 개발</li>
                    <li>웹 기반 부산 주공 작업 지시서 개발</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.left_box}>
                <p>React</p>
              </div>
              <div className={styles.right_box}>
                <div className={[styles.row, styles.tech_contents].join(' ')}>
                  <ul>
                    <li>전기 기반 시계열 데이터 모니터링 및 시각화 대시보드 개발</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.left_box}>
                <p>DevExpress</p>
              </div>
              <div className={styles.right_box}>
                <div className={[styles.row, styles.tech_contents].join(' ')}>
                  <ul>
                    <li>아주대 요양병원 인사, 급여, 회계 시스템 개발</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={[styles.skills, styles.interval].join(' ')}>
          <div className={styles.skills_title}>
            <h4>Database</h4>
          </div>
          <div className="skills_contents">
            <div className={styles.row}>
              <div className={styles.left_box}>
                <p>Oracle</p>
              </div>
              <div className={styles.right_box}>
                <div className={[styles.row, styles.tech_contents].join(' ')}>
                  <ul>
                    <li>아주대 요양병원 인사, 급여, 회계 시스템 개발</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.left_box}>
                <p>Machbase</p>
              </div>
              <div className={styles.right_box}>
                <div className={[styles.row, styles.tech_contents].join(' ')}>
                  <ul>
                    <li>전기 데이터 기반으로 모터 분석 쿼리 작성</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.left_box}>
                <p>TimeScaleDB</p>
              </div>
              <div className={styles.right_box}>
                <div className={[styles.row, styles.tech_contents].join(' ')}>
                  <ul>
                    <li>전기 데이터 기반으로 모터 분석 쿼리 작성</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}