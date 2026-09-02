Write-Host ""
Write-Host "Criando estrutura de pastas em src/app/santos/" -ForegroundColor Cyan
Write-Host ""

$base = "src/app/santos"

$pastas = @(
    "$base/_content/presbiteros/sao-joao-maria-vianney",
    "$base/_content/doutores",
    "$base/_content/apostolos",
    "$base/_content/arcanjos",
    "$base/_components/grid",
    "$base/_components/biografia",
    "$base/_components/layout",
    "$base/_lib",
    "$base/_hooks",
    "$base/_types",
    "$base/_styles",
    "$base/[categoria]/[slug]/[aba]"
)

foreach ($pasta in $pastas) {
    if (-not (Test-Path $pasta)) {
        New-Item -ItemType Directory -Path $pasta -Force | Out-Null
        Write-Host "  OK  $pasta" -ForegroundColor Green
    } else {
        Write-Host "  -- $pasta (ja existe)" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "Criando pastas de imagens em public/santos/" -ForegroundColor Cyan
Write-Host ""

$categorias = @(
    "presbiteros",
    "doutores",
    "apostolos",
    "arcanjos",
    "papas",
    "martires",
    "missionarios",
    "bispos",
    "fundadores",
    "religiosos",
    "leigos"
)

foreach ($cat in $categorias) {
    $cardPath = "public/santos/cards/$cat"
    $heroPath = "public/santos/$cat"

    if (-not (Test-Path $cardPath)) {
        New-Item -ItemType Directory -Path $cardPath -Force | Out-Null
        Write-Host "  OK  $cardPath" -ForegroundColor Green
    }
    if (-not (Test-Path $heroPath)) {
        New-Item -ItemType Directory -Path $heroPath -Force | Out-Null
        Write-Host "  OK  $heroPath" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "===============================================" -ForegroundColor Magenta
Write-Host "Estrutura criada com sucesso!" -ForegroundColor Magenta
Write-Host "===============================================" -ForegroundColor Magenta
Write-Host ""
Write-Host "Confira no VS Code se tudo esta dentro de:" -ForegroundColor Cyan
Write-Host "   src/app/santos" -ForegroundColor White
Write-Host "   public/santos" -ForegroundColor White
Write-Host ""