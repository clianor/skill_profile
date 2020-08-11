import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>김덕현 기술 소개서</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="title">김덕현</h1>
        <div>
          <div>부산광역시 강서구 신호산단 5 로 31</div>
          <div>010-5505-9416</div>
          <div>devlion@kakao.com</div>
        </div>

        <section className="card">
          <h2 className="card_title">Intro</h2>

          <div className="card_contents">
            제 프로필을 읽어주셔서 감사합니다.

            저는 항상 성장하고자 하는 욕망을 가지고 무엇이든 흡수하려 하는 개발자입니다.
            항상 최신 트렌드에 관심을 가지고 적절한 상황에 적절한 기술을 도입할 수 있게 하는 걸 좋아합니다.
          </div>
        </section>

        <section className="card">
          <h2 className="card_title">Basic info</h2>

          <div className="card_contents">
            <table>
              <tr>
                <td>이름</td>
                <td colSpan={2}>김덕현</td>
              </tr>
              <tr>
                <td>활동</td>
                <td>GitHub</td>
                <td>https://github.com/clianor</td>
              </tr>
              <tr>
                <td>활동</td>
                <td>Portfoilo</td>
                <td>https://clianor.github.io/portfolio/</td>
              </tr>
              <tr>
                <td>활동</td>
                <td>Blog</td>
                <td>https://ejrgus94160.gitbook.io/oraclian/</td>
              </tr>
              <tr>
                <td>활동</td>
                <td>Jr.DevTalk</td>
                <td>운영진 (닉네임 큿) <a href="https://open.kakao.com/o/gHz2wN7">https://open.kakao.com/o/gHz2wN7</a></td>
              </tr>
            </table>
          </div>
        </section>

        <section className="card">
          <h2 className="card_title">Career</h2>

          <div className="card_contents">
            <table>
              <tr>
                <td>아이티공간</td>
                <td>2018.08 ~ 2019.10</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <h4>EOCR기반 수집, 제어, 분석 프로그램 개발</h4>
                  <div>
                    Golang, Python - Django, DB - Machbase, TimescaleDB
                  </div>
                  <ul>
                    <li>기존에 Mssql로 되어 있으며 타사 제품을 사용하던 수집 프로그램을 자체 제작</li>
                    <li>정해진 갯수 이상의 장비의 데이터를 수집할 수 없던 기존의 테이블 구조를 개편하여 개발</li>
                    <li>Golang과 시계열 데이터베이스를 활용하여 실시간 데이터 수집 프로세스 구축 및 개발</li>
                    <li>게이트웨이와 EOCR의 상태 및 데이터 분석, EOCR 제어용 관리자 페이지 구축</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <h4>장비 분석 및 시각화 웹 기반 대시보드 개발</h4>
                  <div>
                    JS - React, Python - Django, DB - TimescaleDB, Tools - Git
                  </div>
                  <ul>
                    <li>ApexCharts를 활용한 시계열 데이터 시각화</li>
                    <li>Django의 권한 관리 및 signals 이용</li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
          <div className="card_contents">
            <table>
              <tr>
                <td>Ghtech & SWCORE (소속변경)</td>
                <td>2019.12 ~ 재직중</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <h4>아주대 요양병원 인사, 급여, 회계 시스템 개발 및 유지보수</h4>
                  <div>
                    C# - DevExpress, DB - oracle, Tools - Git
                  </div>
                  <ul>
                    <li>
                      프로젝트의 기존 요구사항이 정의가 정확하지 않아 클라이언트측 현업과 미팅을 통해 개발에 필요한 요소들을 재 정의하고
                      확인하여 요구사항을 새로 정의하였음
                    </li>
                    <li>
                      인수인계 받지 못했던 코드를 신속히 분석하고 기능별 우선순위를 두어 인사 정보 시스템을 먼저 개발 한 뒤
                      근무 관리 시스템을 개발하였으며, 연차 및 발령 그리고 증명서와 같은 순으로 인사시스템을 개발
                    </li>
                    <li>
                      먼저 개발한 인사시스템을 기반으로 회계, 수당 및 급여 시스템 개발 및 인사 시스템 연동
                    </li>
                    <li>
                      일계표 및 원장 시스템 개발, 예산 시스템 개발
                    </li>
                    <li>
                      9개월간 300건가량의 요구사항을 반영하였음
                    </li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
        </section>

        <section className="card">
          <h2 className="card_title">Tech Spec</h2>
          <div className="card_contents">
            <div className="skills">
              <div className="skills_title">
                Language
              </div>
              <div className="skills_contents">
                <table>
                  <tr>
                    <td>Python</td>
                    <td>
                      <ul>
                        <li>Slak을 이용한 G Suite, Github, Trello, MS Office 등의 프로그램을 제어하고 관리하는
                          ECC(Everything Control by Chatting) 프로젝트 중 Google Calendar를 활용한 일정 관리 시스템 개발</li>
                        <li>Machine Learning 한국어 감성 분석 연구 어시스트</li>
                        <li>Django 프레임워크를 이용한 사내 도서관리 시스템 개발</li>
                        <li>Flask 프레임워크를 이용한 전기 데이터 분석 API 개발</li>
                        <li>ModbusTCP 기반 수집 전송 프로그램 제작 및 관리자 페이지 개발</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Javascript</td>
                    <td>
                      <ul>
                        <li>React를 이용한 모니터링 및 시각화 대시보드 개발</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>C#</td>
                    <td>
                      <ul>
                        <li>아주대 요양병원 인사 정보 조회 및 입,퇴사자 관리 및 발령 시스템, 근무 편성표, 인사고과, 인사 통계 기능 개발</li>
                        <li>아주대 요양병원 수당 및 급여 시스템, 급여 전표 생성 및 통계 시스템 개발</li>
                        <li>아주대 요양병원 전표 입력 및 예산 승인 시스템, 일계표, 재무제표, 일용직 근로자 급여 계산기 개발</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Golang</td>
                    <td>
                      <ul>
                        <li>ModbusTCP 기반 수집 전송 프로그램 개발</li>
                      </ul>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="skills">
              <div className="skills_title">
                Framework & Library
              </div>
              <div className="skills_contents">
                <table>
                  <tr>
                    <td>Django</td>
                    <td>
                      <ul>
                        <li>ECC 프로젝트(Everything Control by Chatting) 챗봇 기능 구현</li>
                        <li>사내 도서관리 시스템 개발</li>
                        <li>웹 기반 부산 주공 작업 지시서 개발</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>React</td>
                    <td>
                      <ul>
                        <li>전기 기반 시계열 데이터 모니터링 및 시각화 대시보드 개발</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>DevExpress</td>
                    <td>
                      <ul>
                        <li>아주대 요양병원 인사, 급여, 회계 시스템 개발</li>
                      </ul>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="skills">
              <div className="skills_title">
                Database
              </div>
              <div className="skills_contents">
                <table>
                  <tr>
                    <td>Oracle</td>
                    <td>
                      <ul>
                        <li>아주대 요양병원 인사, 급여, 회계 시스템 개발</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Machbase</td>
                    <td>
                      <ul>
                        <li>30ms 단위로 수집되는 실시간 전기 데이터를 기반으로 모터의 상태를 분석하는 쿼리 작성</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>TimeScaleDB</td>
                    <td>
                      <ul>
                        <li>30ms 단위로 수집되는 실시간 전기 데이터를 기반으로 모터의 상태를 분석하는 쿼리 작성</li>
                      </ul>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
