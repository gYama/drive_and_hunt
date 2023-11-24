export interface Monster {
  id: string;
  name: string;
  level: number;
  element: string;
  thumbnail: string;
  description: string; // モンスターの説明
  skills: string[]; // モンスターのスキルを配列で保持するなど
  // 他のプロパティ...
}
