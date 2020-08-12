import styles from "../styles/Home.module.css";

export default function Career() {
  return (
    <article className={styles.card}>
      <h2 className={styles.card_title}>Career</h2>

      <div className={[styles.card_contents, styles.interval].join(' ')}>
        <div className={styles.row}>
          <div className={styles.left_box}>
            <p>아이티공간</p>
          </div>
          <div className={styles.right_box}>
            <div className={styles.row}>
              <p className={styles.career_term}>2018.08 ~ 2019.10</p>
            </div>
            <div className={[styles.row, styles.flex_column, styles.career_detail].join(' ')}>
              <div className={styles.career_title}>
                <h4>EOCR기반 수집, 제어, 분석 프로그램 개발</h4>
                <p>Golang, Python - Django, DB - Machbase, TimescaleDB</p>
              </div>
              <div className={styles.career_contents}>
                <ul>
                  <li><p>기존에 Mssql로 되어 있으며 타사 제품을 사용하던 수집 프로그램을 자체 제작</p></li>
                  <li><p>정해진 갯수 이상의 장비의 데이터를 수집할 수 없던 기존의 테이블 구조를 개편하여 개발</p></li>
                  <li><p>Golang과 시계열 데이터베이스를 활용하여 실시간 데이터 수집 프로세스 구축 및 개발</p></li>
                  <li><p>게이트웨이와 EOCR의 상태 및 데이터 분석, EOCR 제어용 관리자 페이지 구축</p></li>
                </ul>
              </div>
            </div>
            <div className={[styles.row, styles.flex_column, styles.career_detail].join(' ')}>
              <div className={styles.career_title}>
                <h4>장비 분석 및 시각화 웹 기반 대시보드 개발</h4>
                <p>JS - React, Python - Django, DB - TimescaleDB, Tools - Git</p>
              </div>
              <div className={styles.career_contents}>
                <ul>
                  <li>ApexCharts를 활용한 시계열 데이터 시각화</li>
                  <li>Django의 권한 관리 및 signals 이용</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={[styles.card_contents, styles.interval].join(' ')}>
        <div className={styles.row}>
          <div className={styles.left_box}>
            <p>Ghtech & SWCORE</p>
            <p>(소속변경)</p>
          </div>
          <div className={styles.right_box}>
            <div className={[styles.row, styles.flex_column].join(' ')}>
              <p className={styles.career_term}>2019.12 ~ 재직중</p>
            </div>
            <div className={[styles.row, styles.flex_column].join(' ')}>
              <div className={styles.career_title}>
                <h4>아주대 요양병원 인사, 급여, 회계 시스템 개발 및 유지보수</h4>
                <p>C# - DevExpress, DB - oracle, Tools - Git</p>
              </div>
              <div className={styles.career_contents}>
                <ul>
                  <li>
                    <p>
                      프로젝트의 기존 요구사항이 정의가 정확하지 않아 클라이언트측 현업과 미팅을 통해 개발에 필요한 요소들을
                      재 정의하고 확인하여 요구사항을 새로 정의하였음
                    </p>
                  </li>
                  <li>
                    <p>
                      인수인계 받지 못했던 코드를 신속히 분석하고 기능별 우선순위를 두어 인사 정보 시스템을 먼저 개발 한 뒤
                      근무 관리 시스템을 개발하였으며, 연차 및 발령 그리고 증명서와 같은 순으로 인사시스템을 개발
                    </p>
                  </li>
                  <li>
                    <p>
                      먼저 개발한 인사시스템을 기반으로 회계, 수당 및 급여 시스템 개발 및 인사 시스템 연동
                    </p>
                  </li>
                  <li><p>일계표 및 원장 시스템 개발, 예산 시스템 개발</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}