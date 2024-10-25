using System;

namespace WebApplication1.ViewModels
{
    // TODO アイテムのビューモデルクラス
    public class TodoItemViewModel
    {
        public int Id { get; set; } // TODO アイテムのID
        public string Title { get; set; } // タイトル
        public string Description { get; set; } // 説明
        public DateTime DueDate { get; set; } // 期限
        public bool IsCompleted { get; set; } // 完了状態
        public int Priority { get; set; } // 優先度
        public string Tags { get; set; } // タグ
    }
}

