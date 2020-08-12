import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>김덕현기술 소개서입니다</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.page_header}>
          <h1 className={styles.title}>김덕현</h1>
          <div className={styles.contents}>
            <div>부산광역시 강서구 신호산단 5 로 31</div>
            <div>010-5505-9416</div>
            <div>devlion@kakao.com</div>
          </div>
        </header>

        <section className={styles.page_section}>
          <article className={styles.card}>
            <h2 className={styles.card_title}>Intro</h2>

            <div className={styles.card_contents}>
              <p>제 프로필을 읽어주셔서 감사합니다.</p>
              <p>저는 항상 성장하고자 하는 욕망을 가지고 무엇이든 흡수하려 하는 개발자입니다.</p>
              <p>항상 최신 트렌드에 관심을 가지고 적절한 상황에 적절한 기술을 도입할 수 있게 하는 것을 좋아합니다.</p>
            </div>
          </article>
          <article className={styles.card}>
            <h2 className={styles.card_title}>Basic info</h2>

            <div className={styles.card_contents}>
              <div className={styles.row}>
                <div className={styles.left_box}>
                  <p>이름</p>
                </div>
                <div className={styles.right_box}>
                  <p>김덕현</p>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.left_box}>
                  <p>활동</p>
                </div>
                <div className={styles.right_box}>
                  <div className={styles.row}>
                    <p className={styles.left_box}>Github</p>
                    <p className={styles.right_box}>https://github.com/clianor</p>
                  </div>
                  <div className={styles.row}>
                    <p className={styles.left_box}>Portfoilo</p>
                    <p className={styles.right_box}>https://clianor.github.io/portfolio/</p>
                  </div>
                  <div className={styles.row}>
                    <p className={styles.left_box}>Blog</p>
                    <p className={styles.right_box}>https://ejrgus94160.gitbook.io/oraclian/</p>
                  </div>
                  <div className={styles.row}>
                    <p className={styles.left_box}>Jr.DevTalk 운영진</p>
                    <p className={styles.right_box}>https://open.kakao.com/o/gHz2wN7</p>
                  </div>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.left_box}>
                  <p>커뮤니티</p>
                </div>
                <div className={styles.right_box}>
                  <div className={styles.row}>
                    <p className={styles.left_box}>Jr.DevTalk 운영진</p>
                    <p className={styles.right_box}>https://open.kakao.com/o/gHz2wN7</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className={styles.card}>
            <h2 className={styles.card_title}>Career</h2>

            <div className={styles.card_contents}>
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
            <div className={styles.card_contents}>
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
          <article className={styles.card}>
            <h2 className={styles.card_title}>Tech Spec</h2>
            <div className={styles.card_contents}>
              <div className={styles.skills}>
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
              <div className={styles.skills}>
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
              <div className={styles.skills}>
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
        </section>
      </main>
    </div>
  )
}
