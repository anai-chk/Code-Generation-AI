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

