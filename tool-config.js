export const tool = {
  "id": "E003",
  "title": "동압 한 값 계산기",
  "inputs_text": "밀도 ρ [kg/m³], 속도 V [m/s]",
  "formula": "q = ρ V² / 2",
  "output_text": "동압 q [Pa]",
  "assumptions": "ρ>0, V≥0. 동압 정의값이며 정압·전압과 구분한다. 압축성 유동에서 피토관의 전압−정압을 이 값과 무조건 같다고 보지 않는다.",
  "purpose": "풍속 동압 계산 / 풍동 하중과 계수 산정 전 검산",
  "sources": [
    {
      "label": "NASA Glenn · Dynamic Pressure",
      "url": "https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/dynamic-pressure/"
    }
  ],
  "slug": "eng-dynamic-pressure",
  "category": "유체",
  "result_label": "동압 q",
  "result_dimension": "pressure",
  "fields": [
    {
      "key": "rho",
      "label": "밀도 ρ",
      "dimension": "density",
      "example": 1.2,
      "constraint": "positive",
      "display_unit": "kgm3",
      "display_value": "1.2"
    },
    {
      "key": "v",
      "label": "속도 V",
      "dimension": "speed",
      "example": 10,
      "constraint": "nonnegative",
      "display_unit": "ms",
      "display_value": "10"
    }
  ],
  "site": "https://nanalab.kr/eng-dynamic-pressure/",
  "repository": "https://github.com/NaNaCompany/eng-dynamic-pressure",
  "condition": "",
  "output_unit": "Pa"
};
