using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Data
{
    // データベースコンテキストクラス
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // TODO アイテムの DbSet
        public DbSet<TodoItem> TodoItems { get; set; }

        // モデルの構成
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // TODO アイテムの設定
            modelBuilder.Entity<TodoItem>()
                .Property(t => t.Title)
                .IsRequired()
                .HasMaxLength(100);

            modelBuilder.Entity<TodoItem>()
                .Property(t => t.Description)
                .HasMaxLength(500);

            modelBuilder.Entity<TodoItem>()
                .Property(t => t.DueDate)
                .IsRequired();

            modelBuilder.Entity<TodoItem>()
                .Property(t => t.Priority)
                .IsRequired();
        }
    }
}


// using Microsoft.EntityFrameworkCore;
// namespace WebAppIication1.Data
// / / データベースコンテキストクラス
// public class ApplicationDbContext : DbContext
// public ApplicationDbContext(DbContextOptions く ApplicationDbContext> options)
// : base(options)
// / / TODO アイテムの DbSet
// public DbSet く TodoItem> TodoItems { get; set; }
// 〃 モデルの構成
// protected override void OnModeICreating(Mode 旧 uilder mode 旧 uilder)
// base.OnModeICreating(mode 旧 uilder);
// / / TODO アイテムの設定
// mode 旧 uilder. Entity く T0d01tem>()
// . Property(t = > t. Title)
// .IsRequired()
// . HasMaxLength(100 ) ;
// mode 旧 uilder. Entity く TodoItem>()
// . Property(t = > t. Description)
// . HasMaxLength(500);
// mode 旧 uilder. Entity く T0d01tem>()
// . Property(t = > t. DueDate)
// .IsRequired();
// mode 旧 uilder. Entity くT0d0に0m>()
// . Property(t > t. Priority)
// .IsRequired();